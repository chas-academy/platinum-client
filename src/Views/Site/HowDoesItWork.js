import React from 'react';
import GetStarted from '../../Components/Buttons/GetStarted';
import How from '../../Components/Info/HowDoesItWork';
import { PageTitle } from '../../Lib/Common/Views';

const HowDoesItWork = () => (
  <div className="ui center aligned basic segment grid">

    <PageTitle title="How does it work?" />

    <How />

    <GetStarted />

  </div>
);

export default HowDoesItWork;
