import './VendorCss';
import React from 'react';
import { variableStyles } from './_variables';
import { positioningStyles } from './utilities/_positionings';
import { spacingStyles } from './utilities/_spacing';
import { borderStyles } from './utilities/_border';
import { shadowStyles } from './utilities/_shadows';
import { colorStyles } from './utilities/_color';
import { typographyStyles } from './utilities/_typography';
import { commonStyles } from './utilities/_common';
import { animationStyles } from './utilities/_animations';

const GlobalCss = ({ children }) => {
  variableStyles();
  positioningStyles();
  spacingStyles();
  borderStyles();
  colorStyles();
  shadowStyles();
  typographyStyles();
  commonStyles();
  animationStyles();

  return children || null;
};

export default React.memo(GlobalCss);
