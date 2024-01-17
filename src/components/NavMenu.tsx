import {
  makeStyles,
  shorthands,
  Tab,
  TabList,
  typographyStyles,
  Text,
  // Button
} from "@fluentui/react-components";
import * as React from "react";
// import { useEffect, useState } from "react";

import {
  bundleIcon,
  HomeFilled,
  HomeRegular,
  FolderFilled,
  FolderRegular,
  BuildingRegular,
  BuildingFilled,
  FeedFilled,
  FeedRegular,
  VehicleBusFilled,
  VehicleBusRegular,
  SearchFilled,
  SearchRegular,
  DocumentRegular,
  DocumentFilled
} from "@fluentui/react-icons";
import { Link, useNavigate } from "react-router-dom";
// import { Button } from "@fluentui/web-components";


const HomeIcon = bundleIcon(HomeFilled, HomeRegular);
const FolderIcon = bundleIcon(FolderFilled, FolderRegular);
const BuildingIcon = bundleIcon(BuildingFilled, BuildingRegular);
const ActivityIcon = bundleIcon(FeedFilled, FeedRegular);
const FleetsIcon = bundleIcon(VehicleBusFilled, VehicleBusRegular);
const SearchIcon = bundleIcon(SearchFilled, SearchRegular);
const ReportIcon = bundleIcon(DocumentFilled, DocumentRegular);



const useStyles = makeStyles({
  subtitle: {
    ...typographyStyles.subtitle2,
    paddingLeft: "10px"
  },
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    ...shorthands.padding("0px", "0px"),
    rowGap: "16px",
  },
});

export const Default = ({ handleProjectChange, selectedProjectId, projects }: {
  handleProjectChange: (projectId: string) => void;
  selectedProjectId: string;
  projects: {
    id: string;
    projectNumber: string;
    isFavorite: boolean; // This is the property indicating whether the project is a favorite
    icon: React.JSX.Element;
  }[];
}) => {
  const navigate = useNavigate();

  const changeProject = (projectId: string) => {
    console.log(`Changing project to ${projectId}`);
    if (selectedProjectId === projectId) {
      console.log(`Project already selected, skipping unnecessary update`);
      console.log(`selectedProjetctId:`, { selectedProjectId });
      return; // Avoid unnecessary updates if the project is already selected
    }

    handleProjectChange(projectId);

    const selectedProject = projects.find(project => project.id === projectId);
    if (selectedProject) {
      console.log(`Navigating to /projects/${selectedProject.projectNumber}`);
      navigate(`/projects/${selectedProject.projectNumber}`);
    } else {
      console.log(`Project not found in the list`);
      console.log({ selectedProject })
    }
  };



  return (
    <div style={useStyles.root}>
      <TabList vertical className='ms-Nav'>
        <Tab icon={<SearchIcon />} value="search" selected={selectedProjectId === "search"}>
          Search
        </Tab>
        <Tab icon={<HomeIcon />} value="dashboard" selected={selectedProjectId === "dashboard"}>
          <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/dashboard" onClick={() => changeProject("dashboard")}>
            Dashboard
          </Link>
        </Tab>
        <Tab icon={<FolderIcon />} value="projects" selected={selectedProjectId === "projects"}>
          <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/projects" onClick={() => changeProject("projects")}>
            Projects
          </Link>
        </Tab>
        <Tab icon={<BuildingIcon />} value="organization" selected={selectedProjectId === "organization"}>
          <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/organization" onClick={() => changeProject("organization")}>
            Organization
          </Link>
        </Tab>
        <Tab icon={<ActivityIcon />} value="activity" selected={selectedProjectId === "activity"}>
          <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/activity" onClick={() => changeProject("activity")}>
            Activity
          </Link>
        </Tab>
        <Tab icon={<ReportIcon />} value="report" selected={selectedProjectId === "report"}>
          <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/report" onClick={() => changeProject("report")}>
            Reports
          </Link>
        </Tab>
        <br /><br /><br />
        <Text className={useStyles.subtitle}>Favorites</Text>
        {projects
          .filter((project) => project.isFavorite) // Filter projects based on the isFavorite flag
          .map((project) => (
            <Tab
              key={project.id}
              icon={project.icon || <FleetsIcon />}
              value={project.projectNumber}
              onClick={() => changeProject(project.id)}
              selected={selectedProjectId === project.id}
            >
              <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={`/projects/${project.projectNumber}`}>{project.projectNumber}</Link>
            </Tab>
          ))}
        <br /><br /><br />
        <Text className={useStyles.subtitle}>Links</Text>
        <a href="https://github.com/roflness/cts2" target="_blank" rel="noreferrer">
          <Tab value="GH Link">GitHub Repo</Tab>
        </a>
        <a href="https://react.fluentui.dev/?path=/docs/concepts-introduction--page" target="_blank" rel="noreferrer">
          <Tab value="Fluent UI Link">Fluent UI React v9</Tab>
        </a>
        <a href="https://github.com/twentyhq/twenty?tab=readme-ov-file" target="_blank" rel="noreferrer">
          <Tab value="TwentyHQ Link">Open Source CRM</Tab>
        </a>
        <br /><br /><br />
        {/* <Button button onClick={toggleDarkMode}>Toggle Dark Mode</Button> */}

      </TabList>
    </div>
  );
};