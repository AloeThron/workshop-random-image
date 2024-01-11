import React from "react";

export default function Zoom(props) {
  return (
    <div className={props.vis}>
      <div className="h-screen w-screen z-10 fixed top-0 left-0">
        <div
          className="h-screen w-screen z-20 bg-gray-50 opacity-70 sticky inset-x-0 inset-y-0"
          onClick={() => {
            props.setVis("hidden");
          }}
        ></div>
        <div className="">
          <img
            className="max-h-[70%] max-w-[90%] z-30 absolute inset-x-0 inset-y-0 rounded-lg m-auto"
            src={props.img}
            onClick={() => {
              props.setVis("hidden");
            }}
          />
        </div>
      </div>
    </div>
  );
}
