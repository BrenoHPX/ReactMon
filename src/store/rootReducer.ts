import { combineReducers } from '@reduxjs/toolkit'

const reducers = {}

const rootReducer = combineReducers({
   ...reducers
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer