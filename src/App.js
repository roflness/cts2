import { useState } from "react";
import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';
import StickyHeader from './components/StickyHeader';
import { Default as NavMenu } from './components/NavMenu.tsx'
import { FluentProvider, webLightTheme, Body1, } from '@fluentui/react-components';
import { Default as ProjectBreadcrumb } from './components/ProjectBreadcrumb.tsx';
import ProjectProfilePane from './components/ProjectProfilePane.tsx';
import { projects } from './mock-data/ProjectData.js';
// import {
//   makeStyles,
//   shorthands
// } from "@fluentui/react-components";

// const useStyles = makeStyles({
//   root: {
//     alignItems: "flex-start",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     ...shorthands.padding("50px", "20px"),
//     rowGap: "20px",
//   },
// });

export default function App() {
  const [selectedProject, setSelectedProject] = useState(projects[0]); // Initially select the first project

  const handleProjectChange = (projectId) => {
    const project = projects.find((proj) => proj.id === projectId);
    setSelectedProject(project);
  };

  return (
    <FluentProvider theme={webLightTheme} dir="ltr">
      <StickyHeader />
      <div className="content-wrapper">
        <NavMenu
          className="ms-Nav ms-Grid-col"
          vertical 
          size="large" 
          handleProjectChange={handleProjectChange}
          selectedProjectId={selectedProject.id}
          projects={projects} // Ensure the projects prop is passed correctly
        />
        <Body1 className="content">
          <ProjectBreadcrumb selectedProject={selectedProject}/>
          <ProjectProfilePane selectedProject={selectedProject}/>
        </Body1>
      </div>
    </FluentProvider>
  );
}