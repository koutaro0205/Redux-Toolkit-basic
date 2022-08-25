// 空の Redux ストアを作成してエクスポートすることから始める
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'; // インポートの際は任意に名前を変更できる
import taskReducer from '../features/task/taskSlice';

export const store = configureStore({ // ストアを作成
  reducer: {
    counter: counterReducer, //スライスで作ったreducerをグローバルに更新できるようにする
    task: taskReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState> // 現在のステイトの型をexport
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch