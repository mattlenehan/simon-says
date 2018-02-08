import React from 'react';
import { Flex } from 'reflexbox';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Title from '../components/Title.jsx';
import Subtitle from '../components/Subtitle.jsx';
import NameForm from '../components/NameForm.jsx';
import Shell from './Shell';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#4CAF50',
  },
  appBar: {
    height: 50,
  },
});

const Welcome = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Shell>
      <Title value="Welcome to Simon Says" />
      <Subtitle value="Remember the steps and follow along"/>
      <NameForm value="name"/>
    </Shell>
  </MuiThemeProvider>
);

export default Welcome;