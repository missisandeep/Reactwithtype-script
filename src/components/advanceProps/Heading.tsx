import React from "react";

type headingProps = {
  children: string;
};
const Heading = (props: headingProps) => {
  return <div>{props.children}</div>;
};

export default Heading;
