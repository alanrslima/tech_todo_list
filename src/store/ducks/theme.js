import { Storage, keys } from '~/storage';

// Themes

const lightTheme = {
  type: 'light',
  colors: {
    background: '#D3E3F1',
    onBackgroundPrimary: '#000',
    onBackgroundSecundary: '#4992D0',
    onBackgroundDisable: 'rgba(0,0,0,0.15)',

    surface: '#FFFFFF',
    onSurfacePrimary: 'rgba(0,0,0,0.87)',
    onSurfaceSecundary: 'rgba(0,0,0,0.54)',
    onSurfaceDisable: 'rgba(0,0,0,0.08)',

    backgroundIcon: '#F5F5F5',

    selection: '#D9EAF9',
    onSelectionPrimary: '#306EA1',
    onSelectionSecundary: '#4992D0',

    button: '#D9EAF9',
    onButtonPrimary: '#4992D0',
    onButtonSecundary: '',
    onButtonDisable: '#888',

    input: '#EEE',
    onInputPrimary: '#000000',
  },
};

const darkTheme = {
  type: 'dark',
  colors: {
    background: '#000000',
    onBackgroundPrimary: '#FFFFFF',
    onBackgroundSecundary: 'rgba(255,255,255,0.7)',
    onBackgroundDisable: 'rgba(255,255,255,0.20)',

    surface: '#303030',
    onSurfacePrimary: 'rgba(255,255,255,1)',
    onSurfaceSecundary: 'rgba(255,255,255,0.7)',
    onSurfaceDisable: 'rgba(255,255,255,0.20)',

    backgroundIcon: '#404040',

    selection: '#306EA1',
    onSelectionPrimary: '#FFFFFF',
    onSelectionSecundary: 'rgba(255,255,255,0.7)',

    button: '#306EA1',
    onButtonPrimary: '#FFFFFF',
    onButtonSecundary: '',
    onButtonDisable: '',

    input: '#222',
    onInputPrimary: '#FFFFFF',
  },
};

// Action Types
export const Types = {
  HANDLE_THEME: 'handle_theme',
};

// Reducer
const INITIAL_STATE = {
  theme: lightTheme,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.HANDLE_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

// Action Creators
export const selectLightTheme = () => (dispatch) => {
  dispatch({
    type: Types.HANDLE_THEME,
    payload: lightTheme,
  });
  Storage.setStorageString(keys.CURRENT_THEME, lightTheme.type);
};

export const selectDarkTheme = () => (dispatch) => {
  dispatch({
    type: Types.HANDLE_THEME,
    payload: darkTheme,
  });
  Storage.setStorageString(keys.CURRENT_THEME, darkTheme.type);
};
