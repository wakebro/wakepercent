import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";

interface CounterState {
    counter: number;
  }

const initialState: CounterState = {
	counter: 0
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increase: (state, action: PayloadAction<number>) => ({
			...state,
			count: state.counter + action.payload
		}),
		decrease: (state, action) => ({
			...state,
			count: state.counter - action.payload
		})
	}
})

export const counterActions = counterSlice.actions
export const selectCount = (state: RootState) => state.testCountToolkit.counter
export default counterSlice.reducer