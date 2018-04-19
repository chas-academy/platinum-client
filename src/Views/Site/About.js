import React from 'react';
import GetStarted from '../../Components/Buttons/GetStarted';
import { Message } from 'semantic-ui-react';

const About = () => (
  <div className="ui center aligned basic segment grid">

    <h2 className="headline">About us</h2>

    <div className="parentbox">
      <Message compact className="aboutbox">
          Which mood are you in today&#63;
          Fun or serious? Don’t worry
          you don’t have to choose -
          because you can use this app
          just for fun or also in some
          serious business. Great huh?!

          Just click the button and you
          are ready to create your first
          poll for free which you can
          share with whoever! It’s super
          easy, we promise. And fun too!
      </Message>
    </div>

    <GetStarted />

  </div>
);

export default About;