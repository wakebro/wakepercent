import { createSlice, PayloadAction } from "@reduxjs/toolkit"
interface i18nState { 
	language : string,
}
const initialState: i18nState = { 
	language : 'ko',
}

const i18n = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => ({
			...state,
			['language']: action.payload
		})
  }
})

export const { setLanguage } = i18n.actions
export default i18n.reducer