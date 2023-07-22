import { AiFillRightCircle } from 'react-icons/ai';

const Connect = () => {
  return (
    <div className="flex flex-col gap-4 md:text-white z-10">
      <h1 className="text-3xl font-semibold">
        Connect with
        <br />
        other members
      </h1>
      <p>
        Join Our Vibrant Community, share ideas, and grow together by becoming
        part of our lively Discord community.
      </p>
      <a
        href="#"
        className="text-xl font-semibold text-orange-500 flex items-center gap-3 hover:text-white transition-all duration-300"
      >
        <h1>Join our discord</h1>
        <span>
          <AiFillRightCircle />
        </span>
      </a>
    </div>
  );
};
export default Connect;
