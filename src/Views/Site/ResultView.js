
import React, { Component } from 'react'
import {Container, Header} from 'semantic-ui-react'

class ResultView extends React.Component{
 
    let DashboardApp = React.createClass({
        render: function() {
          return (
            <div>
              <Header as="h2"className="main-title">Acme Inc. Revenue Analysis for 2015</Header>
              <div id="interactive-dashbaord"></div>
              <div className="chart-row">
                <div id="country-revenue">
                  // country revenue chart here
                </div>
              </div>
              <div className="chart-row">
                <div id="monthly-revenue" className="inline-chart">
                  // chart 2 here - spline
                </div>
                <div id="product-revenue" className="inline-chart">
                  // chart 3 here - donut
                </div>
              </div>
            </div>
          );
        }
      });