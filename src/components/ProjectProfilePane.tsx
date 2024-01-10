import React from 'react';
import { Default as SideOverlay } from './SideOverlay.tsx';
import ProjectBadge from './ProjectBadge.tsx'

export default function ProjectProfilePane() {
    return (
        <div className="project-profile-pane">
            {/* Add content for the project profile */}
            <h3>MD230808</h3>
            <h2>Carolina Trucking Inc</h2>
            <h2>CTI</h2>
            {/* Add other details or components */}
            <ProjectBadge text1="PYDFF" text2="Initiation" text3="Active"/>
            <div className='project-details'>
              <SideOverlay />
            </div>
        </div>
    );
};
