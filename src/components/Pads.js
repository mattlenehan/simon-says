import React from 'react';

import Pad from './Pad';
import { colors } from '../constants';

export const PadsByComponentName = {
  GreenPad: ({ ...props }) => (
    <Pad m={1} color={colors.green} {...props} />
  ),
  RedPad: ({ ...props }) => (
    <Pad m={1} color={colors.red} {...props} />
  ),
  YellowPad: ({ ...props }) => (
    <Pad m={1} color={colors.yellow} {...props} />
  ),
  BluePad: ({ ...props }) => (
    <Pad m={1} color={colors.blue} {...props} />
  ),
};

const Pads = ({ pad, onClick }) => {
  const { component } = pad;
  const Composed = PadsByComponentName[component];
  return (
    <Composed
      {...pad}
      onClick={onClick}
    />
  );
};

export default Pads;