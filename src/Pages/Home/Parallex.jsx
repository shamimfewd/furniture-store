const Parallex = () => {
  return (
    <div className="mt-20">
      <div
        className=" bg-fixed flex justify-center items-center  bg-no-repeat bg-cover  h-[70vh] object-left"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="text-center mx-auto">
          <h2 className="text-6xl font-bold text-gray-800">
            Best Furniture Collection 2024
          </h2>
          <p className="w-2/3 text-center mx-auto mt-3 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            eveniet, tempore porro ullam magnam fuga sit voluptates sed adipisci
            explicabo recusandae, id voluptatibus, veritatis cumque! Modi iste
            consequuntur vero nostrum!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Parallex;
