import Immutable from 'immutable';

const Option = Immutable.Record({
  id: String,
  questionId: Number,
  name: String,
  order: Number,
});

export default Option;
