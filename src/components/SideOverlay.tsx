import * as React from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  OverlayDrawer,
  Button,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";
import { Default as Input} from "./Input.tsx";
import { Appearance as SaveEditButtons } from "./SaveEditButton.tsx"

export const Default = ({ selectedProject }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <OverlayDrawer
        position="end"
        open={isOpen}
        onOpenChange={(_, { open }) => setIsOpen(open)}
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={closeDrawer}
              />
            }
          >
            Edit Project
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          {/* <p>Drawer content example</p> */}
          <Input selectedProject={selectedProject} />
        </DrawerBody>
        <br />
        <SaveEditButtons onCloseDrawer={closeDrawer} />
      </OverlayDrawer>

      <Button appearance="secondary" onClick={() => setIsOpen(true)}>
        Edit Project Details
      </Button>
    </div>
  );
};