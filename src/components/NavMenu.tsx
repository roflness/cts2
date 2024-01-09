import {
  makeStyles,
  shorthands,
  Tab,
  TabList,
  TabListProps,
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
  SearchRegular,
  BuildingHomeFilled,
  BuildingHomeRegular
} from "@fluentui/react-icons";

const HomeIcon = bundleIcon(HomeFilled, HomeRegular);
const FolderIcon = bundleIcon(FolderFilled, FolderRegular);
const BuildingIcon = bundleIcon(BuildingFilled, BuildingRegular);
const ActivityIcon = bundleIcon(FeedFilled, FeedRegular);
const FleetsIcon = bundleIcon(VehicleBusFilled,VehicleBusRegular);
const SearchIcon = bundleIcon(SearchFilled, SearchRegular);
const ACWIcon = bundleIcon(BuildingHomeFilled, BuildingHomeRegular);


const useStyles = makeStyles({
  subtitle: {
    ...typographyStyles.subtitle2,
    paddingLeft:"10px"
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

export const Default = (props: Partial<TabListProps>) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <TabList {...props}>
        <Tab icon={<SearchIcon />} value="search">Search</Tab>
        <Tab icon={<HomeIcon />} value="tab1">Dashboard</Tab>
        <Tab icon={<FolderIcon />} value="tab2">Projects</Tab>
        <Tab icon={<BuildingIcon />} value="tab3">Organization</Tab>
        <Tab icon={<ActivityIcon />} value="tab4">Activity</Tab>
        <br></br><br></br><br></br>
        <Text className={styles.subtitle}>Favorites</Text>
        <Tab icon={<FleetsIcon />} value="fav1">MD230808</Tab>
        <Tab icon={<FleetsIcon />} value="fav2">MD200037</Tab>
        <Tab icon={<FleetsIcon />} value="fav3">MD200072</Tab>
        <Tab icon={<ACWIcon />} value="fav4">E220334</Tab>
      </TabList>
    </div>
  );
};
