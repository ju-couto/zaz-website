import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CalendarPage } from './pages/CalendarPage';
import { Contact } from './pages/Contact';

import { Index } from './pages/Index';
import { GlobalStyle } from './styles/global';
import { Music } from './sections/Music';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/calendar"  element={<CalendarPage/>} />
      <Route path="/contact" element={<Contact/>} /> 
      <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer /> 
    </div>
    </Router>
  );
}

export default App;
