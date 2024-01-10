// import * as React from "react";
// import {
//     Breadcrumb,
//     BreadcrumbItem,
//     BreadcrumbDivider,
//     BreadcrumbButton,
// } from "@fluentui/react-components";
// import { Link } from "react-router-dom";

// // const path = "https://www.bing.com/";



// export const Default = ({ selectedProject }) => {
//     const { projectNumber, icon } = selectedProject;

//     return (
//         <Breadcrumb aria-label="Breadcrumb">
//             <BreadcrumbItem>
//                 <BreadcrumbButton><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/projects">Project</Link></BreadcrumbButton>
//             </BreadcrumbItem>
//             <BreadcrumbDivider />
//             <BreadcrumbItem>
//                 <BreadcrumbButton icon={icon}>
//                     {projectNumber}
//                 </BreadcrumbButton>
//             </BreadcrumbItem>
//         </Breadcrumb>
//     );
// };

import * as React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbDivider,
    BreadcrumbButton,
} from "@fluentui/react-components";
import { Link } from "react-router-dom";

export const Default = ({ selectedProject, handleProjectChange }) => {
    const { projectNumber, icon } = selectedProject;

    const handleBreadcrumbClick = () => {
        handleProjectChange('0'); // Assuming '0' represents the default project ID
    };

    return (
        <Breadcrumb aria-label="Breadcrumb">
            <BreadcrumbItem>
                <BreadcrumbButton>
                    <Link
                        style={{ color: 'inherit', textDecoration: 'inherit' }}
                        to="/projects"
                        onClick={handleBreadcrumbClick} // Invoke handleProjectChange here
                    >
                        Project
                    </Link>
                </BreadcrumbButton>
            </BreadcrumbItem>
            <BreadcrumbDivider />
            <BreadcrumbItem>
                <BreadcrumbButton icon={icon}>
                    {projectNumber}
                </BreadcrumbButton>
            </BreadcrumbItem>
        </Breadcrumb>
    );
};
