import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Score {
  username: string;
  time: string;
}

interface ScoresState {
  scores: Score[];
}

const initialState: ScoresState = {
  scores: [
    // Dummy data
    { username: 'Anjum', time: '00:56:23' },
    { username: 'Pragati Azad', time: '00:56:23' },
    // ... more dummy data
  ],
};

const scoresSlice = createSlice({
  name: 'scores',
  initialState,
  reducers: {
    addScore(state, action: PayloadAction<Score>) {
      state.scores.push(action.payload);
      state.scores.sort((a, b) => (a.time > b.time ? 1 : -1));
      if (state.scores.length > 10) {
        state.scores.pop();
      }
    },
  },
});

export const { addScore } = scoresSlice.actions;
export default scoresSlice.reducer;
