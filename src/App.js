import { useState } from "react";
import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';
import StickyHeader from './components/StickyHeader';
import { Default as NavMenu } from './components/NavMenu.tsx'
import { FluentProvider, webLightTheme, webDarkTheme, Body1, useThemeClassName } from '@fluentui/react-components';
import { Stack } from '@fluentui/react';
import { projects } from './mock-data/ProjectData.js';
import Project from "./pages/Project.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDataGrid from './pages/ProjectDataGrid.tsx';
import Organization from "./pages/Organization.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Activity from "./pages/Activity.tsx";
import Report from "./pages/Report.tsx";


function ApplyToBody() {
  const classes = useThemeClassName();

  React.useEffect(() => {
    const classList = classes.split(" ");
    document.body.classList.add(...classList);

    return () => document.body.classList.remove(...classList);
  }, [classes]);

  return null;
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState('');
  const [isProjectVisible, setIsProjectVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleProjectChange = (projectId) => {
    console.log('Handling project change. Selected Project ID:', projectId);

    if (projectId === 'projects') { // Replace 'tab2' with the ID for the Projects tab
      console.log('Switching to Projects tab');
      setIsProjectVisible(false); // Hide the ProjectDataGrid when switching to the Projects tab
      setSelectedProject(projects[0]); // Set the selected project to the first favorite project by default
      return;
    }
    const project = projects.find((proj) => proj.id === projectId);

    setIsProjectVisible((prevVisible) => {
      if (project) {
        if (selectedProject.id === projectId) {
          console.log('Same project clicked. Visibility toggle:', !prevVisible);
          return !prevVisible; // Toggle visibility if the same project is clicked
        }

        console.log('Switching to a different project. New selected project:', project);
        setSelectedProject(project); // Set the new selected project
        return true; // Show the Project component when a different project is clicked
      } else {
        // Reset to default project state as the selected project is not found
        console.log('Selected project not found. Resetting to default project state');
        // setSelectedProject(projects[0]);
        setSelectedProject('');
        return false; // Hide the Project component
      }
    });
  };
  

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const projects2 = [
    { projectNumber: "123", projectName: "Project 1" },
    { projectNumber: "456", projectName: "Project 2" },
  ];

  const organizations = [
    { organizationName: "Org 1" },
    { organizationName: "Org 2" },
  ];

  const activities = [
    { activityName: "Activity 1" },
    { activityName: "Activity 2" },
  ];

  return (
    <Router>
      <FluentProvider theme={isDarkMode ? webDarkTheme : webLightTheme} dir="ltr">
        <Stack horizontal>
          <ApplyToBody />
          <Stack horizontal>
            <StickyHeader />
          </Stack>
          <Stack vertical>
            <div className="content-wrapper">
              <NavMenu
                className="ms-Nav ms-Grid-col"
                vertical
                size="large"
                handleProjectChange={handleProjectChange}
                onclick={handleProjectChange}
                selectedProjectId={selectedProject.id}
                projects={projects} // Ensure the projects prop is passed correctly
                toggleDarkMode={toggleDarkMode}
                isDarkMode={isDarkMode}
              />

              {isProjectVisible && <Project selectedProject={selectedProject} />}

              <Routes>
                {/* <Route path="/tab1" element={<Component1 />} /> Default page */}
                <Route path="/" element={<Body1 className="content"><ProjectDataGrid items={projects} /></Body1>} />
                <Route path="/projects" index element={isProjectVisible ? null : <Body1 className="content"><ProjectDataGrid items={projects2} /></Body1>} />
                {/* <Route path="/projects" index element={<Body1 className="content"><ProjectDataGrid projects={projects} /></Body1>} /> */}
                <Route path="/organization" element={isProjectVisible ? null : <Body1 className="content"><Organization projects={projects} /></Body1>} />
                <Route path="/dashboard" element={isProjectVisible ? null : <Body1 className="content3"><Dashboard projects={projects} /></Body1>} />
                <Route path="/activity" element={isProjectVisible ? null : <Body1 className="content"><Activity projects={projects} /></Body1>} />
                <Route path="/report" element={isProjectVisible ? null : <Body1 className="content3"><Report projects={projects} /></Body1>} />

                {/* <Route exact path="/project" component={NewComponentPage} /> */}
              </Routes>
            </div>
          </Stack>
        </Stack>
      </FluentProvider>
    </Router>
  );
}