import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface UiState {
  mobileNavOpen: boolean;
  megaMenuOpen: boolean;
  searchOpen: boolean;
}

const initialState: UiState = {
  mobileNavOpen: false,
  megaMenuOpen: false,
  searchOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setMobileNavOpen(state, action: PayloadAction<boolean>) {
      state.mobileNavOpen = action.payload;
      if (action.payload) state.searchOpen = false;
    },
    toggleMobileNav(state) {
      state.mobileNavOpen = !state.mobileNavOpen;
    },
    setMegaMenuOpen(state, action: PayloadAction<boolean>) {
      state.megaMenuOpen = action.payload;
    },
    setSearchOpen(state, action: PayloadAction<boolean>) {
      state.searchOpen = action.payload;
      if (action.payload) state.mobileNavOpen = false;
    },
    closeAll(state) {
      state.mobileNavOpen = false;
      state.megaMenuOpen = false;
      state.searchOpen = false;
    },
  },
});

export const {
  setMobileNavOpen,
  toggleMobileNav,
  setMegaMenuOpen,
  setSearchOpen,
  closeAll,
} = uiSlice.actions;

export default uiSlice.reducer;
