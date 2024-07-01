const Button = ({ content }) => {
  return (
    <div>
      <button className="w-full btn px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded-sm lg:w-auto hover:bg-[#415A77] ">
        {content}
      </button>
    </div>
  );
};

export default Button;
