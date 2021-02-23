import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchSysLanguages,
  postLanguages,
  deleteLanguage,
  DeleteLanguagesParameters,
  PostLanguagesParameters
} from '../api';
import { AppState } from './index';

type Loading = 'idle' | 'pending' | 'succeeded' | 'failed' | 'fulfilled';

interface SystemLang {
  lang_id: number;
  lang_iso: string;
  lang_name: string;
  is_rtl: string;
}

interface Language {
  lang_id: number;
  lang_iso: string;
  lang_name: string;
  is_rtl: string;
}

type SliceState = { system: SystemLang[]; entities: Language[]; loading: Loading };

export const initialState = { system: [], entities: [], loading: 'idle' } as SliceState;

export const getSysLanguages = createAsyncThunk('languages/getSysLanguages', async () => {
  const { data } = await fetchSysLanguages();

  return data.items;
});

export const addLanguages = createAsyncThunk<any, PostLanguagesParameters>(
  'languages/addLanguages',
  async ({ projectId, langs }) => {
    const { data } = await postLanguages({ projectId, langs });

    return data.items;
  }
);

export const removeLanguage = createAsyncThunk<any, DeleteLanguagesParameters>(
  'languages/removeLanguage',
  async ({ projectId, langId }) => {
    const { data } = await deleteLanguage({ projectId, langId });

    return data.items;
  }
);

const languagesSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getSysLanguages.pending, (state, { payload }) => {
      state.loading = 'pending';
    });
    builder.addCase(getSysLanguages.fulfilled, (state, { payload }) => {
      state.system = payload;
      state.loading = 'fulfilled';
    });
    builder.addCase(addLanguages.pending, (state, { payload }) => {
      state.loading = 'pending';
    });
    builder.addCase(addLanguages.fulfilled, (state, { payload }) => {
      state.entities.push(payload);
      state.loading = 'fulfilled';
    });
  }
});

export const selector = {
  system: (state: AppState): AppState['languages']['system'] => state.languages.system,
  entities: (state: AppState) => state.languages.entities
};

export default languagesSlice.reducer;
