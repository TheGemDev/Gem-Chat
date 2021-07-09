import React from "react"
import Icon from "react-eva-icons";

function GoogleIcon() {
  return(
    <Icon
      name="Activity"
      size="medium" // small, medium, large, xlarge
      animation={{
        type: "pulse", // zoom, pulse, shake, flip
        hover: true,
        infinite: false,
      }}
    />
  );
};

export default GoogleIcon;
