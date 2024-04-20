import { createSlice, PayloadAction } from '@reduxjs/toolkit';




interface IFetchReducer {
  list: object[],
  isLoading: boolean,
  error: boolean
}


const initialState: IFetchReducer = {
  list: [],
  isLoading: false,
  error: false
}

export const FetchSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    Request: (state) => {
      state.isLoading = true;
    },
    Success: (state, action: PayloadAction<object[]>) => {
      state.list = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    Error: (state) => {
      state.isLoading=false
      state.error = true
    }
  }
})

export const fetchReducer = FetchSlice.reducer
export const fetchActions = FetchSlice.actions