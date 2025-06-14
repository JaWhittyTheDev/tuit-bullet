import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./Routes";
import "./index.css";
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/locales';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <AppRoutes />
    </I18nextProvider>
  </React.StrictMode>
);