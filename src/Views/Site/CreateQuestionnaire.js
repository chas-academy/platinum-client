import React from 'react';
import { PageTitle } from '../../Lib/Common/Views';
import Questionnaire from '../../Redux/Containers/Questionnaires/CreateQuestionnaire';
/* eslint-disable react/prop-types */
const CreateQuestionnaire = props => (
  <div className="width-100">
    { !props.location.state &&
      <PageTitle title="Create Questionnaire" />
    }
    <Questionnaire location={props.location} />
  </div>);

export default CreateQuestionnaire;
