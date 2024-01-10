import {
  makeStyles,
  shorthands,
  Tab,
  TabList,
  typographyStyles,
  Text
} from "@fluentui/react-components";
import * as React from "react";
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
  SearchRegular
} from "@fluentui/react-icons";
import { Link } from "react-router-dom";

const HomeIcon = bundleIcon(HomeFilled, HomeRegular);
const FolderIcon = bundleIcon(FolderFilled, FolderRegular);
const BuildingIcon = bundleIcon(BuildingFilled, BuildingRegular);
const ActivityIcon = bundleIcon(FeedFilled, FeedRegular);
const FleetsIcon = bundleIcon(VehicleBusFilled, VehicleBusRegular);
const SearchIcon = bundleIcon(SearchFilled, SearchRegular);


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
  projects: { id: string; projectNumber: string; icon: React.JSX.Element; }[];
}) => {

  const styles = useStyles();

  const changeProject = (projectId: string) => {
    handleProjectChange(projectId);
  };

  return (
    <div className={styles.root}>
      <TabList vertical className='ms-Nav'>
        <Tab icon={<SearchIcon />} value="search">Search</Tab>
        <Tab icon={<HomeIcon />} value="tab0">Dashboard</Tab>
        <Tab icon={<FolderIcon />} ><Link style={{ textDecoration: 'none' }} to="/tab1">Projects</Link></Tab>
        <Tab icon={<BuildingIcon />} ><Link style={{ textDecoration: 'none' }} to="/tab2">Organization</Link></Tab>
        <Tab icon={<ActivityIcon />} value="tab3">Activity</Tab>
        <br /><br /><br />
        <Text className={styles.subtitle}>Favorites</Text>
        {projects.map((project) => (
          <Tab
            key={project.id}
            icon={project.icon || <FleetsIcon />} // Replace with appropriate icon
            value={project.id}
            onClick={() => changeProject(project.id)}
            selected={project.id === selectedProjectId}
          >
            {project.projectNumber}
          </Tab>
        ))}
        <br /><br /><br />
        <Text className={styles.subtitle}>Links</Text>
        <a href="https://github.com/roflness/cts2" target="_blank" rel="noreferrer">
          <Tab value="GH Link">GitHub Repo</Tab>
        </a>
        <a href="https://react.fluentui.dev/?path=/docs/concepts-introduction--page" target="_blank" rel="noreferrer">
          <Tab value="Fluent UI Link">Fluent UI React v9</Tab>
        </a>
        <a href="https://github.com/twentyhq/twenty?tab=readme-ov-file" target="_blank" rel="noreferrer">
          <Tab value="TwentyHQ Link">Open Source CRM</Tab>
        </a>

      </TabList>
    </div>
  );
};