import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../componenets/ToDo";
import { actionCreators } from "../store";
function Home({ toDos, addToDo }) {
  // 남아있는 props(추출하지않은 props를 확인할때 사용) props대신에 {...rest} 이렇게 넣어둠
  // console.log(rest);
  // const { toDos } = props;
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    // console.log(text);
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form action="" onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

// ---------------하단의 redux에서 state의 내용을 받아오는것과 reducer로 데이터를 전송시키는
// 방법을 설정하고 상단에 toDos로 state를 받아오고
// addToDo로 dispatch를 실행하여 reducer로 데이터를 보냄
// 첫번째 argument(state)는 store.js의 state값이고
// 두번째 argument는 (ownProps) component의 props임 여기는 App.js에서  react-router-dom에의해 넘겨받은 props를 말함
// 이 함수는 mapStateToProps로 불리움
function getCurrentState(state, ownProps) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch, ownProps) {
  return { addToDo: (text) => dispatch(actionCreators.addToDo(text)) };
}

// connect store.js에 있는 data를 현재 Home.js로 연결해서 사용가능하게 해줌
// connect의 두번째 argument는 mapDispatchToProps임
export default connect(getCurrentState, mapDispatchToProps)(Home);
