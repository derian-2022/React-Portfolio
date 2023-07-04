import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

//Languages react
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

//Languages Json
import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';
import global_pt from './translations/pt/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global_es,
    },
    en: {
      global_en,
    },
    pt: {
      global_pt,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
