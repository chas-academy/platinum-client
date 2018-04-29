import Immutable from 'immutable';
import Question from './Question';

const Questionnaire = Immutable.Record({
  id: String,
  title: String,
  userId: Number,
  questions: [new Question()],
});

export default Questionnaire;
