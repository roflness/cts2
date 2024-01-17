import {
  bundleIcon,
  VehicleBusFilled,
  VehicleBusRegular,
  BuildingHomeFilled,
  BuildingHomeRegular
} from "@fluentui/react-icons";

const FleetsIcon = bundleIcon(VehicleBusFilled, VehicleBusRegular);
const ACWIcon = bundleIcon(BuildingHomeFilled, BuildingHomeRegular);

export const projects = [
  {
    "id": 2906,
    projectNumber: "MD200080",
    projectName: "Revolv",
    organizationName: "Revolv",
    program: "PYDFF",
    programPhase: "Final Design",
    projectStatus: "Active",
    projectLead: "Dinah Willier",
    projectDesignTeam: "Shakira Davis",
    description: "Description for Project 1",
    siteAddress1: "7135 Siempre Viva Rd",
    siteAddress2: "San Diego, CA 92154",
    primarySource: "Internal Referral",
    subSource: "CS Team",
    ownershipOption: "Option 2: Customer",
    icon: <FleetsIcon />,
  },
  {
    id: 2,
    projectNumber: "MD200100",
    projectName: "Santee Site - Phase 1",
    organizationName: "TC Construction Inc.",
    program: "PYDFF",
    programPhase: "Construction",
    projectStatus: "Active",
    projectLead: "Eva Brungardt",
    projectDesignTeam: "Shakira Davis",
    description: "Description for Project 1",
    icon: <FleetsIcon />,
  },
  {
    id: 3,
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
  },
  {
    id: 4,
    projectNumber: "E220168",
    projectName: "3825 Centre St",
    organizationName: "Loma Crest",
    program: "PYD2.0",
    programPhase: "Preliminary Eng & Design",
    projectStatus: "Active",
    projectLead: "Jonathan Torres",
    projectDesignTeam: "Shakira Davis",
    description: "Description for Project 1",
    icon: <ACWIcon />,
  },
  {
    id: 5,
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
  },
  // Add more projects as needed
];


