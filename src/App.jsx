import AboutUs from './AboutUs';
import './App.css';
import Faq from './Faq';
import Features from './Features';
import Header from './Header';
import Pricing from './Pricing';

const App = () => {
  return (
    <div className="text-slate-700 bg-slate-50">
      <Header />
      <Features />
      <AboutUs />
      <Pricing />
      <Faq />
    </div>
  );
};

export default App;
