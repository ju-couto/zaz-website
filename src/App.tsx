import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { CalendarPage } from './pages/CalendarPage';
import { Contact } from './pages/Contact';

import { Index } from './pages/Index';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Index />
      <Footer /> 
    </div>
  );
}

export default App;
