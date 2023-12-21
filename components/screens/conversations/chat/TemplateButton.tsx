import React from "react";
import Image from "next/image";
import img from "../../../../public/book.svg";

const TemplateButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center border border-blue-500 rounded-lg text-white focus:outline-none transition-all duration-300 hover:bg-opacity-15 hover:bg-blue-500"
      style={{
        position: "absolute",
        top: "79%",
        right: "11%",
        width: "14%",
        height: "5%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="relative" style={{ width: "20px", height: "20px", marginRight: "5px" }}>
        <Image src={img} alt="Icon" layout="fill" objectFit="contain" />
      </div>
      Полезные шаблоны
    </button>
  );
};

export default TemplateButton;
