import React from "react";
import sony from '../../assets/sony.jpg';

const Card = () => {
  return (
    <div className="border p-4 rounded-lg shadow-2xl w-[80%] max-w-[500px]">
      <div className="relative h-64 mb-4">
        <img className="absolute w-full h-full object-cover rounded" src={sony} alt="" />
      </div>
      <div className="">
        <p className="font-semibold">Sony Headphones</p>
        <p className="text-sm pb-2">Price: 1456</p>
        <p className="font-thin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minus
          deserunt optio numquam voluptates non ipsa unde molestias temporibus
          voluptatum?
        </p>
      </div>
    </div>
  );
};

export default Card;
