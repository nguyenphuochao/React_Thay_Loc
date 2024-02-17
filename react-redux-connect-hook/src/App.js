import { connect } from "react-redux";

function App(props) {
  console.log('component re-render');
  return (
    <div >
      <button onClick={() => props.dispatchDeposit(20)}>deposit $20</button>
      <button onClick={() => props.dispatchWithdraw(10)}>withdraw $10</button>
      <div id="result">{props.money}</div>
      <div>{props.increment}</div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log('chạy hàm mapStateToProps');
  // money của state trên store mà change thì component sẽ dc re-render
  return {
    money: state.money,
  }
}
const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    dispatchDeposit: (number) => {
      dispatch({ type: 'deposit', payload: number })
    },
    dispatchWithdraw: (number) => {
      dispatch({ type: 'withdraw', payload: number })
    }
  }
}
export default connect(mapStateToProps, mapDispatchtoProps)(App)


