import React from 'react';
import { Dropdown, DropdownDivider, DropdownItem } from "../src/Dropdown";
import { Button } from '../src/Button';

export const Main = () => {
  return (
    <div style={{ margin: 12 }}>
    <Dropdown>
      <DropdownItem>item1</DropdownItem>
      <DropdownItem>item2</DropdownItem>
      <DropdownDivider/>
      <DropdownItem>item3</DropdownItem>
    </Dropdown>
    </div>
  );
}

export default {
  title: 'Dropdown Component',
  component: Dropdown,
 }
