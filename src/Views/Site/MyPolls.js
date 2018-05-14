import React from 'react';
import ListablePolls from '../../Redux/Containers/Polls/ListablePolls';
import { PageTitle } from '../../Lib/Common/Views';

const MyPolls = () => (
  <div className="center-content-grid max-width-25 margin-auto my-polls">
    <PageTitle title="My Polls" />
    <ListablePolls />
  </div>);

export default MyPolls;
