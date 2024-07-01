import Flicking from "@egjs/react-flicking";
import { FaChair, FaGift } from "react-icons/fa";
import { RiSofaFill } from "react-icons/ri";
import { IoBedSharp } from "react-icons/io5";
import { MdTableRestaurant } from "react-icons/md";

const HorizontalScroll = () => {
  return (
    <div>
      <Flicking moveType="freeScroll" bound={true}>
        <div className="flex justify-center bg-[#415A77] py-4">
          <span className="button rounded-sm bg-white shadow-xl p-4 text-6xl text-gray-600 mr-2 is-white">
            <FaChair />
          </span>

          <span className="button rounded-sm bg-white shadow-xl p-4 text-6xl text-gray-600 mr-2 is-white">
            <RiSofaFill />
          </span>

          <span className="button rounded-sm bg-white shadow-xl p-4 text-6xl text-gray-600 mr-2 is-white">
            <IoBedSharp />
          </span>

          <span className="button rounded-sm bg-white shadow-xl p-4 text-6xl text-gray-600 mr-2 is-white">
            <MdTableRestaurant />
          </span>

          <span className="button rounded-sm bg-white shadow-xl p-4 text-6xl text-gray-600 mr-2 is-white">
            <FaGift />
          </span>

          <span className="button rounded-sm bg-white shadow-xl p-4 text-6xl text-gray-600 mr-2 is-white">
            <MdTableRestaurant />
          </span>

          <span className="button rounded-sm bg-white shadow-xl p-4 text-6xl text-gray-600 mr-2 is-white">
            <MdTableRestaurant />
          </span>

          <span className="button rounded-sm bg-white shadow-xl p-4 text-6xl text-gray-600 mr-2 is-white">
            <MdTableRestaurant />
          </span>

          <span className="button rounded-sm bg-white shadow-xl p-4 text-6xl text-gray-600 mr-2 is-white">
            <MdTableRestaurant />
          </span>

          <span className="button rounded-sm  bg-white shadow-xl p-4 text-6xl text-gray-600 mr-2 is-white">
            <MdTableRestaurant />
          </span>

          <span className="button rounded-sm bg-white shadow-xl p-4 text-6xl text-gray-600 mr-2 is-white">
            <MdTableRestaurant />
          </span>

          <span className="button rounded-sm bg-white shadow-xl p-4 text-6xl text-gray-600 mr-2 is-white">
            <MdTableRestaurant />
          </span>
        </div>
      </Flicking>
      ;
    </div>
  );
};

export default HorizontalScroll;
