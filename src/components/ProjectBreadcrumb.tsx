import * as React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbDivider,
    BreadcrumbButton,
} from "@fluentui/react-components";

// const path = "https://www.bing.com/";

export const Default = ({ selectedProject }) => {
    const { projectNumber, icon } = selectedProject;

    return (
        <Breadcrumb aria-label="Breadcrumb">
            <BreadcrumbItem>
                <BreadcrumbButton>Project</BreadcrumbButton>
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