import react from 'react';
import { connect } from 'react-redux';
import { addOne, removeOne, addTen, removeTen, reset } from './counterActions';

function CounterContainer(props) {
  return (
    <div>
      <h2>Count : {props.count}</h2>
      <button onClick={props.addOne}>+</button>
      <button onClick={props.removeOne}>-</button>
      <button onClick={props.addTen}>+10</button>
      <button onClick={props.removeTen}>-10</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addOne: () => dispatch(addOne()),
    removeOne: () => dispatch(removeOne()),
    addTen: () => dispatch(addTen()),
    removeTen: () => dispatch(removeTen()),
    reset: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
