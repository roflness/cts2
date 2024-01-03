import React from 'react';
import { Nav, initializeIcons } from '@fluentui/react';

const navigationStyles = {
  root: {
    height: '100vh',
    boxSizing: 'border-box',
    border: '0px solid #eee', 
    overflowY: 'auto',
    paddingTop: '2vh'
  },
};

const links = [
  {
    links: [
      {
        name: 'Dashboard',
        key:'key1',
        url: '/',
        iconProps: {
          iconName: 'Home',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Projects',
        key: 'key2',
        url: '/',
        iconProps: {
          iconName: 'Folder',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Transfer',
        key: 'key3',
        url: '/',
        iconProps: {
          iconName: 'SwitcherStartEnd',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Stats',
        key: 'key4',
        url: '/',
        iconProps: {
          iconName: 'StackedLineChart',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
    ],
  },
];

const Navigation = () => {
  initializeIcons();
  return (
    <Nav
      groups={links}
      selectedKey='key1'
      styles={navigationStyles}
    />
  );
};

export default Navigation;