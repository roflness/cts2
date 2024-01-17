import * as React from "react";
import { makeStyles, Button } from "@fluentui/react-components";


const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
    direction: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    // gap:"spacing-xs",
    // verticalAlign:"center"
  },
});

export const Appearance = ({ onCloseDrawer }) => {
  const styles = useStyles();

  const handleSave = () => {
    // Perform save logic here
    // ...

    // Close the drawer after save
    onCloseDrawer();
  };

  const handleEdit = () => {
    // Perform edit logic here
    // ...

    // Close the drawer after edit
    onCloseDrawer();
  };

  return (
    <div className={styles.wrapper}>
      <Button appearance="secondary" onClick={handleEdit}>Cancel</Button>
      <Button appearance="primary" onClick={handleSave}>Save</Button>
    </div>
  );
};