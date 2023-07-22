import AboutUs from './AboutUs';
import './App.css';
import ContactUs from './ContactUs';
import Features from './Features';
import Header from './Header';
import Pricing from './Pricing';
import Service from './Service';
import Testimonial from './Testimonial';
import Footer from './Footer';

const App = () => {
  return (
    <div className="text-slate-700 bg-slate-50">
      <Header />
      <Features />
      <Service />
      <Pricing />
      <AboutUs />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
