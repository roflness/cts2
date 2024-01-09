import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';
import StickyHeader from './components/StickyHeader';
import { Default as NavMenu } from './components/NavMenu.tsx'
import { FluentProvider, webLightTheme, Body1,  } from '@fluentui/react-components';
import { Default as SideOverlay } from './components/SideOverlay.tsx';
import { Default as ProjectBreadcrumb } from './components/ProjectBreadcrumb.tsx';

export default function App() {
  return (
    <FluentProvider theme={webLightTheme} dir="ltr">
      <StickyHeader />
      <div className="content-wrapper">
        <NavMenu vertical="true" size="large" className="ms-Nav ms-Grid-col" />
        <Body1 className="content">
          <ProjectBreadcrumb />
          <h2>MD230808 - Carolina Trucking Inc - CTI</h2>
          <SideOverlay />
        </Body1>
      </div>
    </FluentProvider>
  );
}