import Button from './Button';
import Typed from 'react-typed';

// import stock from './assets/stock.png';
const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto text-center py-20 px-7 flex flex-col gap-[1.2rem]">
      <h2 className="text-2xl font-medium">
        Welcome to <span className="text-orange-500 "> Veteran Investors</span>
      </h2>
      {/* <h1 className="md:text-8xl font-bold mb-2 leading-[5rem] text-6xl">
        Make the outcome <br></br> Income
      </h1> */}
      <Typed
        className="md:text-8xl font-bold mb-2 leading-[5rem] text-6xl"
        strings={[
          'Trade with strategy',
          'Invest with precision',
          'Master the markets',
          'Make the outcome<br>Income',
        ]}
        typeSpeed={110}
        backSpeed={40}
        loop
      />
      <p className="text-2xl font-medium">
        Join our exclusive community and become a profitable stock trader today!
      </p>
      <div className="md:text-2xl text-lg  font-bold cursor-pointer flex items-center md:gap-16 gap-10 justify-center">
        <a className="text-orange-500 p-3 hover:text-blue-950 transition-all duration-500 inline-block">
          Join Discord &rarr;
        </a>

        <Button>Get Pass</Button>
      </div>
    </div>
  );
};
export default Hero;
