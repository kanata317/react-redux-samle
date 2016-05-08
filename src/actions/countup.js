export const COUNTUP = 'COUNTUP'


export function countup() {
  return dispatch => {
    dispatch((() => {
      let countupNumber = 1;
      return {
        type: COUNTUP,
        countupNumber
      };
    })());
  }

}
