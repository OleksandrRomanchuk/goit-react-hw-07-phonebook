import { createSlice } from '@reduxjs/toolkit';

const groupFilterInitialState = 'All';

const groupFilterSlice = createSlice({
	name: 'groupFilter',
	initialState: groupFilterInitialState,
	reducers: {
		setGroupFilter(_, action) {
			return action.payload;
		},
	},
});

export const { setGroupFilter } = groupFilterSlice.actions;
export const groupFilterReducer = groupFilterSlice.reducer;
