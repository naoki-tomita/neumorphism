import React from 'react';
import { Accordion, AccordionItem } from '../src/Accordion';

export const Main = () => {
  return (
    <div style={{ margin: 12 }}>
      <Accordion>
        <AccordionItem title="Title string is here">
          Body text is here.
        </AccordionItem>
        <AccordionItem title="Title string is very bold.">
          Body text is very thin.
        </AccordionItem>
        <AccordionItem title="Title string">
          Body text.
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default {
  title: 'Accordion Component',
  component: Accordion,
 }
