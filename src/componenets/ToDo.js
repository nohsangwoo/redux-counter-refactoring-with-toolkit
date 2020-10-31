import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    //   dispatch는  reducer로 데이터를 전송시키는 기능이고
    // ownProps는 이 함수에서만(===mapDispatchToProps) state를 받아오는 기능
    onBtnClick: (e) => {
      e.preventDefault();
      return dispatch(remove(ownProps.id));
    },
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
