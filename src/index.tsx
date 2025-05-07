import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import { WindowsProvider } from './contexts/WindowContext';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BackgroundProvider } from './contexts/BackgroundContext';
import Default from './assets/backgrounds/default.jpeg';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BackgroundProvider defaultBackground={`url(${Default})`}>
      <ThemeProvider theme={theme}>
        <WindowsProvider>
          <CssBaseline/>
          <App />
        </WindowsProvider>
      </ThemeProvider>
    </BackgroundProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
