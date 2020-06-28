import React from 'react';
import { Accordion } from '../src/Accordion';

export const Main = () => {
  return (
    <div style={{ margin: 12 }}>
    <Accordion></Accordion>
    </div>
  );
}

export default {
  title: 'Accordion Component',
  component: Accordion,
 }
