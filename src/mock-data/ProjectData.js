import {
    bundleIcon,
    VehicleBusFilled,
    VehicleBusRegular,
    BuildingHomeFilled,
    BuildingHomeRegular
  } from "@fluentui/react-icons";
  
  const FleetsIcon = bundleIcon(VehicleBusFilled,VehicleBusRegular);
  const ACWIcon = bundleIcon(BuildingHomeFilled, BuildingHomeRegular);

export const projects = [
    {
      id: 1,
      projectNumber: "MD230808",
      projectName: "CTI",
      organizationName: "Carolina Trucking Inc",
      program: "PYDFF",
      programPhase: "Initiation",
      projectStatus: "Active",
      projectLead: "Christopher Roberts",
      projectDesignTeam: "Shakira Davis",
      description: "Description for Project 1",
      icon: <FleetsIcon />,
      // Add more details specific to Project 1
    },
    {
      id: 2,
      projectNumber: "E220334",
      projectName: "3825 Centre St",
      organizationName: "Loma Crest",
      program: "PYD2.0",
      programPhase: "Design",
      projectStatus: "Active",
      projectLead: "Jonathan Torres",
      projectDesignTeam: "Shakira Davis",
      description: "Description for Project 2",
      icon: <ACWIcon />,
      // Add more details specific to Project 2
    },
    // Add more projects as needed
  ];

  
  