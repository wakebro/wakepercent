// Ducks 패턴 규칙 예시
// module/counter.js

import { PayloadAction } from "@reduxjs/toolkit"

// Action Type
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

// Action Creator & Action
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

const counterInitialState = { count: 0 }

// Reducer
const counter = (state = counterInitialState, action: PayloadAction<String>) => {
	switch (action.type) {
		case INCREASE:
			return { count: state.count + 1 }
		case DECREASE:
			return { count: state.count - 1 }
		default:
			return state
	}
}

export default counter