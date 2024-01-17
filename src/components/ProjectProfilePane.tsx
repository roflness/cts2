import React from 'react';
import { Default as SideOverlay } from './SideOverlay.tsx';
import ProjectBadge from './ProjectBadge.tsx';
import ProjectDetails from './ProjectDetails.tsx';

export default function ProjectProfilePane({ selectedProject }) {
    const { projectNumber, projectName, organizationName, program, programPhase, projectStatus } = selectedProject;

    return (
        <div className="project-profile-pane">
            {/* Add content for the project profile */}
            <h4>{projectNumber}</h4>
            <h2>{organizationName}</h2>
            <h2>{projectName}</h2>
            {/* Add other details or components */}
            <ProjectBadge text1={program} text2={programPhase} text3={projectStatus} />
            <br></br>
            <div className='project-details'>
                <ProjectDetails selectedProject={selectedProject} />
                <br></br>
                <SideOverlay selectedProject={selectedProject}/>
            </div>
        </div>
    );
};
