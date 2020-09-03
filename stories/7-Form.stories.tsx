import React from 'react';
import { Input } from '../src/Form';

export const SimpleInput = () => {
  return (
    <div style={{ margin: 12 }}>
     <Input type="password" placeholder="hoge"/>
    </div>
  );
}

export const SimpleCheckbox = () => {

}

export default {
  title: 'Input Component',
  component: Input,
}
