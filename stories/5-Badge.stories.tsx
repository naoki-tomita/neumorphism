import React from 'react';
import { Card, CardImage, CardBody, CardTag, CardTitle, CardText, CardActionButton } from '../src/Card';
import { Badge } from '../src/Badge';

export const Main = () => {
  return (
    <div style={{ margin: 12, width: 320, height: 420 }}>
      <span style={{ marginRight: 8 }}><Badge text="foo" /></span>
      <span style={{ marginRight: 8 }}><Badge text="bar" color="danger" /></span>
      <span style={{ marginRight: 8 }}><Badge text="info" color="info" uppercase /></span>
    </div>
  );
}

export default {
  title: 'Badge Component',
  component: Badge,
 }
