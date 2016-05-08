import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Countup from '../components/countup';
import * as countupActions from '../actions/countup';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(countupActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countup);
