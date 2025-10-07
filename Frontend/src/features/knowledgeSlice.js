import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getKnowledge = createAsyncThunk("getKnowledge", async () => {
  const response = await fetch(
    "https://lore-of-the-lands-between.onrender.com/api/knowledge"
  );
  return response.json();
});

export const knowledgeSlice = createSlice({
  name: "knowledgeSlice",
  initialState: {
    knowledge: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getKnowledge.pending, (state) => {
 
      })
      .addCase(getKnowledge.fulfilled, (state, action) => {
        state.loading = false;
        state.knowledge = action.payload;
      })
      .addCase(getKnowledge.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default knowledgeSlice.reducer;
