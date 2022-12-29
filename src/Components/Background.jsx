import React from "react";

export const Background = () => {
  return (
    <>
      <div className="absolute top-0 z-[-1]">
        <img
          src="https://res.cloudinary.com/doo5jbomi/image/upload/v1672296630/engagebud%20assgnmt/bg-1_sow2qa.png"
          alt=""
          width={"100%"}
        />
      </div>
      <div className="absolute bottom-0  z-[-1]">
        <img
          src="https://res.cloudinary.com/doo5jbomi/image/upload/v1672296630/engagebud%20assgnmt/bg2_zpxxr9.png"
          width={"100%"}
          alt=""
        />
      </div>
    </>
  );
};
