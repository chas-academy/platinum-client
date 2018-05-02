import React from 'react';
import Questionnaires from '../../Redux/Containers/Questionnaires/Questionnaires';
import { PageTitle } from '../../Lib/Common/Views';

const MyQuestionnaires = () => (
  <div className="center-content-grid max-width-25 margin-auto my-questionaires">
    <PageTitle title="My Polls" />
    <Questionnaires />
  </div>);

export default MyQuestionnaires;

// Den connectade hämtas sen från containern ist för components
