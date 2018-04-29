import Immutable from 'immutable';
import Questionnaire from './Questionnaire';

const Poll = Immutable.Record({
  id: String,
  userId: Number,
  status: String,
  link: String,
  maxNumberOfVotes: Number,
  questionnaire: new Questionnaire(),
});

export default Poll;
