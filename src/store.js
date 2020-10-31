import { createStore } from "redux";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");

const deleteToDo = createAction("DELETE");

// switch를 사용하지 않고 reducer를 세팅할수있음

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    // return 할때에는 완전히 새로운 state를 return 해야한다.
    //  새로운 state가 아닐때에는 return하지 않는다.
    // 그래도 immer라는 것이  return [{ text: action.payload, id: Date.now() }, ...state]; 이런식으로 작동하게 만들어줌
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) => {
    // 여기선 완전히 새로운 state니깐 return 해준다
    return state.filter((toDo) => toDo.id !== action.payload);
  },
});

// configureStore는 여러 middleware랑 같이 사용가능
// 이번경우에는 구글 확장프로그램에서 redux devtools 라는곳에서 state의 상태를 확인하고 이전의 log들을 불러와 확인도 가능함, 이전에 실행했던 순서대로 돌아갈수도있음
const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
