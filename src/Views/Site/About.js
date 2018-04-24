import React from 'react';
import GetStarted from '../../Components/Buttons/GetStarted';
import AboutInfo from '../../Components/Info/About';
import { PageTitle } from '../../Lib/Common/Views';

const About = () => (
  <div className="ui center aligned basic segment grid">

    <PageTitle title="About us" />

    <AboutInfo />

    <GetStarted />

  </div>
);

export default About;
