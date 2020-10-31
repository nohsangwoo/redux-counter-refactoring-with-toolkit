import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
// import { useParams } from "react-router-dom";

function Detail({ toDo, onBtnClick }) {
  // App.js에서 넘겨받은 id는 useParams()로 확인 가능함
  //   const id = useParams();
  //   console.log(toDo);

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at:{toDo?.id}</h5>
      <button onClick={onBtnClick}>DEL</button>
    </>
  );
}

function getCurrentState(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  //   state를 전부 반환하면 배열형식으로 전달받기때문에 state의 id를 가지고 find 하여
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

function mapStateToProps(dispatch, ownProps) {
  // useParams();랑 같은기능인데 옵션이 더 많음

  const {
    match: {
      params: { id },
    },
    history,
  } = ownProps;

  // 첫번째 배열을 반환받도록 설정
  return {
    onBtnClick: (e) => {
      //   e.preventDefault();

      dispatch(actionCreators.deleteToDo(id));
      history.push("/");
      return;
    },
  };

  //   return { toDos: state };
}

export default connect(getCurrentState, mapStateToProps)(Detail);
