import Immutable from 'immutable';

const Poll = Immutable.Record({
  id: String,
  status: String,
  questionnaireId: Number,
  link: String,
});

export default Poll;
