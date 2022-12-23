import React from "react";

type parrentHeadingProps = {
  children: React.ReactNode;
};

const ParrentHeading = (props: parrentHeadingProps) => {
  return <div>{props.children}</div>;
};

export default ParrentHeading;
