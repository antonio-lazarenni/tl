import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProjects, Project } from '../api';
import { AppState } from './index';
import { getSysLanguages } from './languages';

type Loading = 'idle' | 'pending' | 'succeeded' | 'failed' | 'fulfilled';

type SliceState = { entities: Project[]; loading: Loading };

export const initialState = { entities: [], loading: 'idle' } as SliceState;

export const getProjects = createAsyncThunk<
  Project[],
  void,
  {
    state: AppState;
  }
>('projects/getProjects', async (_, { dispatch, getState }) => {
  const { data } = await fetchProjects();
  const { system } = getState().languages;

  if (system.length === 0) {
    dispatch(getSysLanguages());
  }

  return data.items;
});

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProjects.pending, (state, { payload }) => {
      state.loading = 'pending';
    });
    builder.addCase(getProjects.fulfilled, (state, { payload }) => {
      state.entities = payload;
      state.loading = 'fulfilled';
    });
  }
});

export const selector = {
  entities: (state: AppState) => state.projects.entities
};

export default projectsSlice.reducer;
