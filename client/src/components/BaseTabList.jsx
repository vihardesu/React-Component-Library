import React, {useContext} from 'react';
import styled from 'styled-components';
import { useTabState, Tab, TabList, TabPanel } from "reakit/Tab";

export default function BaseTabList() {
  const tab = useTabState({ selectedId: null });
  return (
    <>
      <TabList {...tab} aria-label="My tabs">
        <Tab {...tab}>Tab 1</Tab>
        <Tab {...tab}>Tab 2</Tab>
        <Tab {...tab}>Tab 3</Tab>
      </TabList>
      <TabPanel {...tab}>Tab 1</TabPanel>
      <TabPanel {...tab}>Tab 2</TabPanel>
      <TabPanel {...tab}>Tab 3</TabPanel>
    </>
  );
}