import React, { useState } from "react";
import Zoom from "./Zoom";

export default function card(props) {
  const [vis, setVis] = useState("hidden");
  const img = props.img;
  return (
    <div>
      <div className="h-[350px] bg-gradient-to-br from-slate-50 to-gray-50 shadow-md border border-gray-200 rounded-lg w-[250px] max-w-xs lg:max-w-sm">
        <div className="mt-5 h-[250px] flex justify-center items-center">
          <img
            className="h-[200px] p-3 bg-auto hover:-translate-y-1 hover:scale-110 duration-300"
            src={img}
            onClick={() => setVis("visible")}
          />
        </div>
        <div className="h-50 p-5">
          <p className="text-gray-900 text-center tracking-tight">
            Image Id: {props.id}
          </p>
        </div>
      </div>
      <Zoom vis={vis} setVis={setVis} img={img} />
    </div>
  );
}
