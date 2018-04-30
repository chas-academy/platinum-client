import Immutable from 'immutable';
import Option from './Option';

const Question = Immutable.Record({
  id: String,
  questionnaireId: Number,
  name: String,
  type: String,
  order: Number,
  options: [new Option()],
});

export default Question;
