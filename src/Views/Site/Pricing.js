import React from 'react';
import PricingTable from '../../Components/DataTable/Pricing';
import GetStarted from '../../Components/Buttons/GetStarted';
import { PageTitle } from '../../Lib/Common/Views';

const Pricing = () => (
  <div className="ui center aligned basic segment parent-container">
    <PageTitle title="Pricing" className="headline" />
    <div className="table-container">
      <PricingTable />
      <GetStarted />
    </div>
  </div>
);

export default Pricing;
