import { Body1 } from "@fluentui/react-components";
import React from "react";
import { Default as ProjectBreadcrumb } from '../components/ProjectBreadcrumb.tsx';
import ProjectProfilePane from '../components/ProjectProfilePane.tsx';
import { WithPanels as ProjectPanel } from '../components/ProjectPanel.tsx'
import { Stack } from "@fluentui/react";


export default function Project({ selectedProject }) {
  return (
    <Stack horizontal>
      <Stack vertical>
        <Body1 className="content">
          <ProjectBreadcrumb selectedProject={selectedProject} handleProjectChange={undefined} />
          <ProjectProfilePane selectedProject={selectedProject} />
        </Body1>
      </Stack>
      {/* <div className="content2" style={{ paddingTop: '0px', color: 'inherit', textDecoration: 'inherit' }}> */}
      <Stack vertical>
        <ProjectPanel />
      </Stack>
      {/* </div> */}
    </Stack>
  )
}