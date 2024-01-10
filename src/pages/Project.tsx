import { Body1 } from "@fluentui/react-components";
import React from "react";
import { Default as ProjectBreadcrumb } from '../components/ProjectBreadcrumb.tsx';
import ProjectProfilePane from '../components/ProjectProfilePane.tsx';

export default function Project({selectedProject}) {
    return (
        <Body1 className="content">
          <ProjectBreadcrumb selectedProject={selectedProject}/>
          <ProjectProfilePane selectedProject={selectedProject}/>
        </Body1>
    )
}