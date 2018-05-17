import React, { Component } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Site from '../Views/Site';
import Admin from '../Views/Admin';
import { SiteRoute, AdminRoute, AuthSiteRoute } from '../Lib/Common/Routes';

/* eslint-disable react/prefer-stateless-function */

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Switch>
          <SiteRoute exact path="/" component={Site.Home} />
          <SiteRoute exact path="/sign-in" component={Site.SignIn} />
          <SiteRoute exact path="/sign-up" component={Site.SignUp} />
          <SiteRoute exact path="/pricing" component={Site.Pricing} />
          <AuthSiteRoute exact path="/create-questionnaire" component={Site.CreateQuestionnaire} />
          <AuthSiteRoute exact path="/my-questionnaires" component={Site.MyQuestionnaires} />
          <AuthSiteRoute exact path="/my-polls" component={Site.MyPolls} />
          <SiteRoute exact path="/about" component={Site.About} />
          <AuthSiteRoute exact path="/howdoesitwork" component={Site.HowDoesItWork} />
          <SiteRoute exact path="/polls/:pollId" component={Site.Polls} />
          <SiteRoute path="/polls/:pollId/result" component={Site.Result} />

          <AdminRoute
            exact
            path="/admin"
            component={() => <Redirect to="/admin/dashboard" />}
          />
          <AdminRoute
            exact
            path="/admin/dashboard"
            component={Admin.Dashboard}
          />
          <AdminRoute exact path="/admin/users" component={Admin.Users.List} />
          <AdminRoute
            exact
            path="/admin/users/new"
            component={Admin.Users.New}
          />
          <AdminRoute
            exact
            path="/admin/users/:userId"
            component={Admin.Users.Static}
          />
          <AdminRoute
            exact
            path="/admin/users/:userId/edit"
            component={Admin.Users.Edit}
          />
          <AdminRoute exact path="/admin/settings" component={Admin.Settings} />
          <AdminRoute path="/admin/*" component={Admin.PageNotFound} />

          <SiteRoute path="*" component={Site.PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

/* eslint-enable react/prefer-stateless-function */
