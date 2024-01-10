import { useState } from "react";
import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';
import StickyHeader from './components/StickyHeader';
import { Default as NavMenu } from './components/NavMenu.tsx'
import { FluentProvider, webLightTheme, Body1 } from '@fluentui/react-components';
import { projects } from './mock-data/ProjectData.js';
import Project from "./pages/Project.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDataGrid from './pages/ProjectDataGrid.tsx';
import Organization from "./pages/Organization.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Activity from "./pages/Activity.tsx";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isProjectVisible, setIsProjectVisible] = useState(false);

  // const handleProjectChange = (projectId) => {
  //   const project = projects.find((proj) => proj.id === projectId);
  
  //   setIsProjectVisible((prevVisible) => {
  //     if (project) {
  //       if (selectedProject.id === projectId) {
  //         return prevVisible; // Toggle visibility if the same project is clicked
  //       }
  //       setSelectedProject(project); // Set the new selected project
  //       return true; // Show the Project component when a different project is clicked
  //     } else {
  //       // Reset to default project state as the selected project is not found
  //       setSelectedProject(projects[0]);
  //       return false; // Hide the Project component
  //     }
  //   });
  // };

  const handleProjectChange = (projectId) => {
    if (projectId === 'projects') { // Replace 'tab2' with the ID for the Projects tab
      setIsProjectVisible(false); // Hide the ProjectDataGrid when switching to the Projects tab
      setSelectedProject(projects[0]); // Set the selected project to the first favorite project by default
      return;
    }
  
    const project = projects.find((proj) => proj.id === projectId);
  
    setIsProjectVisible((prevVisible) => {
      if (project) {
        if (selectedProject.id === projectId) {
          return prevVisible; // Toggle visibility if the same project is clicked
        }
        setSelectedProject(project); // Set the new selected project
        return true; // Show the Project component when a different project is clicked
      } else {
        // Reset to default project state as the selected project is not found
        setSelectedProject(projects[0]);
        return false; // Hide the Project component
      }
    });
  };

  return (
    <Router>
      <FluentProvider theme={webLightTheme} dir="ltr">
        <StickyHeader />
        <div className="content-wrapper">
          <NavMenu
            className="ms-Nav ms-Grid-col"
            vertical
            size="large"
            handleProjectChange={handleProjectChange}
            onclick={handleProjectChange}
            selectedProjectId={selectedProject.id}
            projects={projects} // Ensure the projects prop is passed correctly
          />
          {isProjectVisible && <Project selectedProject={selectedProject} />}

          <Routes>
            {/* <Route path="/tab1" element={<Component1 />} /> Default page */}
            <Route path="/" element={<Body1 className="content"><ProjectDataGrid projects={projects} /></Body1>} />
            <Route path="/projects" index element={isProjectVisible ? null : <Body1 className="content"><ProjectDataGrid projects={projects} /></Body1>} />
            {/* <Route path="/projects" index element={<Body1 className="content"><ProjectDataGrid projects={projects} /></Body1>} /> */}
            <Route path="/organization" element={isProjectVisible ? null : <Body1 className="content"><Organization projects={projects} /></Body1>} />
            <Route path="/dashboard" element={isProjectVisible ? null : <Body1 className="content"><Dashboard projects={projects} /></Body1>} />
            <Route path="/activity" element={isProjectVisible ? null : <Body1 className="content"><Activity projects={projects} /></Body1>} />
            {/* <Route exact path="/project" component={NewComponentPage} /> */}
          </Routes>
          {/* <Project selectedProject={selectedProject}/> */}
        </div>
      </FluentProvider>
    </Router>
  );
}