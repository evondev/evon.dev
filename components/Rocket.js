import React from "react";
import { View } from "./view";

const Rocket = ({ className = "" }) => {
  return (
    <View className="rocket-wrapper">
      <img
        src="/images/astronaut-hello.png"
        alt="hello"
        className={`${className} rocket-hello`}
      />
    </View>
  );
};

export default Rocket;
