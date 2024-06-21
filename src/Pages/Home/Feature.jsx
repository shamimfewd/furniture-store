import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";

const Feature = () => {
  const [features, setFeatures] = useState([]);
  const [filteredFeatures, setFilteredFeatures] = useState([]);
  const [activeBtn, setActiveBtn] = useState("chair");
  useEffect(() => {
    fetch("featureData.json")
      .then((res) => res.json())
      .then((data) => {
        setFeatures(data);
        const filterData = data.filter((item) => item.category === "chair");
        setFilteredFeatures(filterData);
      });
  }, []);

  const filterFeatures = (categoryItem) => {
    setActiveBtn(categoryItem);
    const currentFeature = features.filter((value) => {
      return value.category === categoryItem;
    });
    setFilteredFeatures(currentFeature);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <SectionTitle heading={"Features Products"} />
      <div className="mt-10">
        <div className="flex  mx-auto justify-center mb-10 ">
          <button
            className={` text-white px-5 py-3 uppercase rounded-l-sm ${
              activeBtn === "chair" ? "bg-[#415A77]" : "bg-gray-800"
            }`}
            onClick={() => filterFeatures("chair")}
          >
            Chair
          </button>
          <button
            className={` text-white px-5 py-3 uppercase  ${
              activeBtn === "table" ? "bg-[#415A77]" : "bg-gray-800"
            }`}
            onClick={() => filterFeatures("table")}
          >
            Table
          </button>
          <button
            className={` text-white px-5 py-3 uppercase  ${
              activeBtn === "sofa" ? "bg-[#415A77]" : "bg-gray-800"
            }`}
            onClick={() => filterFeatures("sofa")}
          >
            Sofa
          </button>
          <button
            className={` text-white px-5 py-3 uppercase rounded-r-sm ${
              activeBtn === "gifts" ? "bg-[#415A77]" : "bg-gray-800"
            }`}
            onClick={() => filterFeatures("gifts")}
          >
            Gift
          </button>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2
         lg:grid-cols-4 gap-4"
        >
          {filteredFeatures &&
            filteredFeatures.map((product) => (
              <div key={product.id} className="card rounded-md  bg-base-100 shadow-xl">
                <figure>
                  <img className="h-[10rem] pt-4"
                    src={product.image}
                    alt="product"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p>{product.description}</p>
                 
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
