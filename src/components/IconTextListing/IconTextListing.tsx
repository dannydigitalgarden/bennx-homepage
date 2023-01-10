import React from "react";
import IconText from "./IconText";
import Container from "components/Container";

import darkIcon from "assets/icons/performance-dark.svg";
import lightIcon from "assets/icons/performance-light.svg";

const textIcon = {
  url: "#",
  text: "Performance",
  iconDark: darkIcon,
  iconLight: lightIcon,
};

const IconTextListing = () => {
  return (
    <div className="mx-auto">
      <Container>
        <div className="flex flex-col gap-[1px] md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-[2px]">
          <IconText {...textIcon} />
          <IconText {...textIcon} />
          <IconText {...textIcon} />
          <IconText {...textIcon} />
          <IconText {...textIcon} />
        </div>
      </Container>
    </div>
  );
};

export default IconTextListing;
