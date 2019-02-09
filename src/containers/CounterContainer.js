import {connect} from 'react-redux';
import Counter from '../components/Counter';
import { decrementAct, incrementAct } from '../actions';

const mapStateToProps = state => {
  return {
    times: state.counterReducer
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDecrement: (step) => {
      dispatch(decrementAct(step));
    },
    onIncrement: (step) => {
      dispatch(incrementAct(step));
    }
  }
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default CounterContainer;