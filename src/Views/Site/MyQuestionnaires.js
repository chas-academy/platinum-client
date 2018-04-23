import React, { Component } from "react";
import Questionnaires from "../../Components/Questionnaires/Questionnaires";
import { PageTitle } from '../../Lib/Common/Views'

export default class MyQuestionnaires extends Component {
  render() {
    return (
      <div className="center-content-grid">
        <PageTitle title="My Polls" />
        <Questionnaires />;
      </div>
    )
  }
}