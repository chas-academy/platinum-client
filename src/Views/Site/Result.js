
import React from 'react';
import Results from '../../Redux/Containers/Polls/Results';
/* eslint-disable react/prop-types */
const Result = props => <Results pollId={props.match.params.pollId} />;

export default Result;

