const Toogle = ({ children, onClick, tailClass }) => {
  return (
    <button
      className={`${tailClass} py-1 px-2  w-full h-full rounded-md `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Toogle;
