const Button = ({ children, moreClass, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white  rounded-xl px-5 py-3 bg-orange-500 hover:bg-blue-950 transition-all duration-500  ${moreClass} `}
    >
      {children}
    </button>
  );
};
export default Button;
