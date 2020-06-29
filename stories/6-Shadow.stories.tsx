import React from 'react';
import { ShadowSoft, ShadowInset, Shadow, ShadowLarge, ShadowSmall } from '../src/Shadow';
import { Box } from '../src/Box';

export const Normal = () => {
  return (
    <div style={{ margin: 12, width: 320, height: 420 }}>
      <Shadow>
        <Box p={3}>
          Hello world!
        </Box>
      </Shadow>
    </div>
  );
}

export const Large = () => {
  return (
    <div style={{ margin: 12, width: 320, height: 420 }}>
      <ShadowLarge>
        <Box p={3}>
          Hello world!
        </Box>
      </ShadowLarge>
    </div>
  );
}

export const Small = () => {
  return (
    <div style={{ margin: 12, width: 320, height: 420 }}>
      <ShadowSmall>
        <Box p={3}>
          Hello world!
        </Box>
      </ShadowSmall>
    </div>
  );
}

export const Soft = () => {
  return (
    <div style={{ margin: 12, width: 320, height: 420 }}>
      <ShadowSoft>
        <Box p={3}>
          Hello world!
        </Box>
      </ShadowSoft>
    </div>
  );
}

export const Inset = () => {
  return (
    <div style={{ margin: 12, width: 320, height: 420 }}>
      <ShadowInset>
        <Box p={3}>
          Hello world!
        </Box>
      </ShadowInset>
    </div>
  );
}

export default {
  title: 'Shadow Component',
  component: ShadowSoft,
 }
