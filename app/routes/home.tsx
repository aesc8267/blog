import Nav from "../components/nav";
import React, { useState } from "react";
import SideBar from "../components/sidebar";
import APlayer from "../components/player";
import Card from "../components/card";
export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Nav />
      <div className="flex w-full h-full">
        <SideBar />
        <div className="flex-5 p-3 flex overflow-auto flex-wrap ">
          {/* <Card />
          <Card /> */}
          <APlayer/>

        </div>
      </div>
    </div>
  );
}

function ScrollAnimation() {
  const [isActive, setIsActive] = useState(true);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0) {
      // 向下滚动，激活动画
      setIsActive(false);
    } else {
      // 向上滚动，还原
      setIsActive(true);
    }
  };
}
