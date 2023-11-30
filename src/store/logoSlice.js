import { createSlice } from '@reduxjs/toolkit';
import logo from '../../public/logo.png';

const logoSlice = createSlice({
  name: 'logo',
  initialState: {
    src: logo,
  },
});

export default logoSlice.reducer;