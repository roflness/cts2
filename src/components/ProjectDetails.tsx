import * as React from "react";

import { InfoLabel, makeStyles, tokens, Body2 } from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    alignItems: "start",
    display: "flex",
    flexDirection: "column",
    rowGap: tokens.spacingVerticalXS,
  },
});

export default function ProjectDetails({ selectedProject }) {
    const styles = useStyles();
    const { projectLead
        , projectDesignTeam
        , organizationName
        , siteAddress1
        , siteAddress2
        , primarySource
        , subSource
     } = selectedProject;

    return (
        <div className={styles.container}>
            <InfoLabel size="medium" weight="semibold">
                Project Lead
            </InfoLabel>
            <Body2>{projectLead}</Body2>
            <br></br>
            <InfoLabel size="medium" weight="semibold">
                Design Team
            </InfoLabel>
            <Body2>{projectDesignTeam} N/A</Body2>
            <br></br>
            <InfoLabel size="medium" weight="semibold">
                Organization
            </InfoLabel>
            <Body2>{organizationName}</Body2>
            <br></br>
            <InfoLabel size="medium" weight="semibold">
                Site Address
            </InfoLabel>
            <Body2>{siteAddress1} N/A</Body2>
            <Body2>{siteAddress2}</Body2>
            <br></br>
            <InfoLabel size="medium" weight="semibold">
                Source
            </InfoLabel>
            <Body2>{primarySource} N/A</Body2>
            <br></br>
            <InfoLabel size="medium" weight="semibold">
                Sub Source
            </InfoLabel>
            <Body2>{subSource} N/A</Body2>
        </div>
    );
}