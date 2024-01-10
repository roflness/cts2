import { useState } from "react";
import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';
import StickyHeader from './components/StickyHeader';
import { Default as NavMenu } from './components/NavMenu.tsx'
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { projects } from './mock-data/ProjectData.js';
import Project from "./pages/Project.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDataGrid from './pages/ProjectDataGrid.tsx';
import Organization from "./pages/Organization.tsx";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(projects[0]); // Initially select the first project
  const [isProjectVisible, setIsProjectVisible] = useState(false); // Initially set project as not visible

  const handleProjectChange = (projectId) => {
    const project = projects.find((proj) => proj.id === projectId);
    // setSelectedProject(project);

    // Toggle visibility only if a different project is selected
    if (selectedProject.id !== projectId) {
      setSelectedProject(project);
      setIsProjectVisible(true); // Show the Project component when a different project is selected
    } else {
      setIsProjectVisible(!isProjectVisible); // Toggle visibility if the same project is selected
    } 
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
          <Routes>
            {/* <Route path="/tab1" element={<Component1 />} /> Default page */}
            <Route path="/tab1" element={<ProjectDataGrid projects={projects} />} />
            <Route path="/tab2" element={<Organization projects={projects} />} />

            {/* <Route exact path="/project" component={NewComponentPage} /> */}
            {/* Define other routes as needed */}
          </Routes>
          {isProjectVisible && <Project selectedProject={selectedProject} />}
          {/* <Project selectedProject={selectedProject}/> */}
        </div>
      </FluentProvider>
    </Router>
  );
}