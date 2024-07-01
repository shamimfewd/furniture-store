const Hero = () => {
  return (
    <div>
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="leading-snug text-3xl font-semibold mb-4 text-gray-800 dark:text-white lg:text-6xl">
                Best <span className="text-[#415A77]">Furniture</span>{" "}
                Collection 2024
              </h1>

              <p className="mt-3 mb-4 text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                beatae error laborum ab amet sunt recusandae? Reiciendis natus
                perspiciatis optio.
              </p>

              <button className="w-full btn px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded-sm lg:w-auto hover:bg-[#415A77] ">
                Shop Now
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src="https://www.bhadepay.com/assets/images/furniture-banner.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
