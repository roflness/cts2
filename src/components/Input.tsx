import * as React from "react";
import {
  makeStyles,
  shorthands,
  Input,
  Label,
  Select
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("20px"),
    maxWidth: "400px",
    // Stack the label above the field (with 2px gap per the design system)
    "> div": {
      display: "flex",
      flexDirection: "column",
      ...shorthands.gap("2px"),
    },
  },
});


export function Default({ selectedProject }) {
  const { projectNumber, projectName, organizationName, projectStatus, projectLead, projectDesignTeam, siteAddress1, siteAddress2, primarySource, subSource, ownershipOption } = selectedProject;
  const styles = useStyles();

  return (
    <form noValidate autoComplete="off" className={styles.root}>
      <div>
        <Label htmlFor={projectNumber}>Project Number</Label>
        <Input type="text" id={projectNumber} value={projectNumber} />
      </div>

      <div>
        <Label htmlFor={projectName}>Project Name</Label>
        <Input type="text" id={projectName} value={projectName} />
      </div>

      <div>
        <Label htmlFor={organizationName}>Organization Name</Label>
        <Input type="text" id={organizationName} value={organizationName} />
      </div>

      <div>
        <Label htmlFor={projectStatus}>Project Status</Label>
        <Select defaultValue={projectStatus} id={projectStatus}>
          <option>Active</option>
          <option>Wait listed</option>
          <option>On hold</option>
          <option>Canceled</option>
          <option>Operational</option>
        </Select>
        {/* <Input type="text" id={projectStatus} value={projectStatus} /> */}
      </div>

      <div>
        <label htmlFor={projectLead}>Project Lead</label>
        <Select defaultValue={projectLead} id={projectLead}>
          <option>Dinal Willier</option>
          <option>Andrew Lizardi</option>
          <option>Eva Brungar</option>
          <option>Jonathan Torres</option>
          <option>Christopher Roberts</option>
        </Select>
        {/* <Label htmlFor={projectLead}>Project Lead</Label>
        <Input type="text" id={projectLead} value={projectLead} /> */}
      </div>

      <div>
        <Label htmlFor={projectDesignTeam}>Design Team</Label>
        {/* <Input type="text" id={projectDesignTeam} value={projectDesignTeam} /> */}
        <Select defaultValue={projectDesignTeam} id={projectDesignTeam}>
          <option>Felicea Smith</option>
          <option>Joseph Bielawski</option>
          <option>Shakira Davis</option>
          <option>Scott Thompson</option>
        </Select>
      </div>

      <div>
        <Label htmlFor={ownershipOption}>Ownership Option</Label>
        {/* <Input type="text" id={ownershipOption} value={ownershipOption} /> */}
        <Select defaultValue={ownershipOption} id={ownershipOption}>
          <option>Option 1: Utility</option>
          <option>Option 2: Customer</option>
        </Select>
      </div>

      <div>
        <Label htmlFor={primarySource}>Source</Label>
        <Input type="text" id={primarySource} value={primarySource} />
      </div>

      <div>
        <Label htmlFor={subSource}>Sub Source</Label>
        <Input type="text" id={subSource} value={subSource} />
      </div>

      <div>
        <Label htmlFor={siteAddress1}>Address Line 1</Label>
        <Input type="text" id={siteAddress1} value={siteAddress1} />
      </div>

      <div>
        <Label htmlFor={siteAddress2}>Address Line 2</Label>
        <Input type="text" id={siteAddress2} value={siteAddress2} />
      </div>

    </form>
  );
}