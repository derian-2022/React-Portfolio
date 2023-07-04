import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Themes from './components/Themes';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';

// //Languages react
// import { I18nextProvider } from 'react-i18next';
// import i18next from 'i18next';

// //Languages Json
// import global_es from './translations/es/global.json';
// import global_en from './translations/en/global.json';
// import global_pt from './translations/pt/global.json';

// i18next.init({
//   interpolation: { escapeValue: false },
//   lng: 'es',
//   resources: {
//     es: {
//       global_es,
//     },
//     en: {
//       global_en,
//     },
//     pt: {
//       global_pt,
//     },
//   },
// });

function App() {
  return (
    <BrowserRouter>
      {/* <I18nextProvider i18n={i18next}> */}
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      {/* </I18nextProvider> */}
    </BrowserRouter>
  );
}

export default App;
