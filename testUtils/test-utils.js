import React from 'react';
import { render as rtlRender } from '@testing-library/react';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'theme-ui';
import { configureStore } from '@reduxjs/toolkit';
// import { useDispatch, useSelector } from 'react-redux';

// Import your own reducer
import reducer from '../src/store/rootReducer';
import './i18n';
import theme from '../src/theme';

function render(
  ui,
  {
    initialState,
    store = configureStore({
      reducer
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
