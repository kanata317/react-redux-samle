import * as countupActions from '../actions/countup';

export default function countup(state = {
    counter: 0
  }, action) {
  switch (action.type) {
    case countupActions.COUNTUP:
      let counter = state.counter + action.countupNumber;
      return {
        counter: counter
      };
      break;
    default:
      return state;

  }
}
