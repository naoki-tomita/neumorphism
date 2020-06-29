import React from 'react';
import { Card, CardImage, CardBody, CardTag, CardTitle, CardText, CardActionButton } from '../src/Card';

export const Main = () => {
  return (
    <div style={{ margin: 12, width: 320, height: 420 }}>
      <Card>
        <CardImage src="https://obs.line-scdn.net/0hjVRyKXwPNXlvAB0LVQ9KLlxSMhkBbC5nTTRkTRNQKBUeeCpzAzAuH0JSPklHNXZqUjV-H05UbkA" />
        <CardBody>
          <CardTag text="Hello"/>
          <CardTitle title="Hello world" />
          <CardText text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
          <CardActionButton>Learn more</CardActionButton>
        </CardBody>
      </Card>
    </div>
  );
}

export default {
  title: 'Card Component',
  component: Card,
 }
