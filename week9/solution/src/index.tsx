import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {SettingsContext, SettingsContextProvider} from "./lib/context/SettingsContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <SettingsContextProvider>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </SettingsContextProvider>
  </React.StrictMode>
);
