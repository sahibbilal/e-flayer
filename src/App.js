import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Fashion from './components/Pages/fashion/Fashion';
import Electronic from './components/Pages/Electronic/Electronic';
import Jewellery from './components/Pages/jewellery/Jewellery';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/electronic" element={<Electronic />} />
          <Route path="/jewellery" element={<Jewellery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
