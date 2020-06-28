import React from 'react';
import { Box } from "../src/Box";

export const Colors = () => {
  return (
    <>
    <div style={{ border: "black 1px solid" }}>
      <Box m={1}>margin:1</Box>
    </div>
    <div style={{ border: "black 1px solid" }}>
      <Box m={2}>margin:2</Box>
    </div>
    <div style={{ border: "black 1px solid" }}>
      <Box m={3}>margin:3</Box>
    </div>
    <Box p={1}>
      <div style={{ border: "black 1px solid" }}>padding:1</div>
    </Box>

    <Box p={2}>
    <div style={{ border: "black 1px solid" }}>padding:2</div>
    </Box>
    <Box p={3}>
      <div style={{ border: "black 1px solid" }}>padding:3</div>
    </Box>
    </>
  );
}

export default {
  title: 'Box Component',
  component: Box,
 }
