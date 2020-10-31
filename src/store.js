import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

console.log(toDos.reducer);

// actions값또한 알아서 주기때문에 뽑아오면됨, 따로 createAction으로 설정해줄필요 없음
export const { add, remove } = toDos.actions;

// configureStore는 여러 middleware랑 같이 사용가능
// 이번경우에는 구글 확장프로그램에서 redux devtools 라는곳에서 state의 상태를 확인하고 이전의 log들을 불러와 확인도 가능함, 이전에 실행했던 순서대로 돌아갈수도있음
export default configureStore({ reducer: toDos.reducer });
