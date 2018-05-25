import React from 'react';
import ListablePolls from '../../Redux/Containers/Polls/ListablePolls';
import { PageTitle } from '../../Lib/Common/Views';

const MyPolls = () => (
  <div className="center-content-grid max-width-35 margin-auto my-polls">
    <PageTitle title="Results" />
    <ListablePolls />
  </div>);

export default MyPolls;
