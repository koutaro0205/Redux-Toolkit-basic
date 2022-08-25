// スライスを作成（Actionを作る。reducerを使ってstateの管理を行う）

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter', // ①スライスの識別子
  initialState, // ②初期状態
  reducers: { //③状態の更新方法を定義する関数（更新関数）
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
//アクションをエクスポート（各コンポーネントで用いる）

export default counterSlice.reducer; // reducerをエクスポート