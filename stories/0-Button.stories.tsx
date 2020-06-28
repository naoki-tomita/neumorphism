import React from 'react';
import { Button } from "../src/Button";

export const Colors = () => {
  return (
    <>
    <div style={{ margin: 12 }}>
      <Button color="primary">default / primary</Button>
    </div>
    <div style={{ margin: 12 }}>
      <Button color="secondary">secondery</Button>
    </div>
    </>
  );
}

export const TextColors = () => {
  return (
    <>
    <div style={{ margin: 12 }}>
      <Button>default</Button>
    </div>
    <div style={{ margin: 12 }}>
      <Button textColor="secondary">secondery</Button>
    </div>
    <div style={{ margin: 12 }}>
      <Button textColor="dark">dark</Button>
    </div>
    <div style={{ margin: 12 }}>
      <Button textColor="gray">gray</Button>
    </div>
    <div style={{ margin: 12 }}>
      <Button textColor="info">info</Button>
    </div>
    <div style={{ margin: 12 }}>
      <Button textColor="success">success</Button>
    </div>
    <div style={{ margin: 12 }}>
      <Button textColor="danger">danger</Button>
    </div>
    </>
  );
}

export const Pill = () => {
  return (
    <div style={{ margin: 12 }}>
      <Button pill>pilled button</Button>
    </div>
  );
}

export default {
  title: 'Button Component',
  component: Button,
 }
