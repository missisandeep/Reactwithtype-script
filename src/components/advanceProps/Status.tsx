import React from "react";

type statusProps = {
  status: "loding" | "success" | "error";
};

const Status = (props: statusProps) => {
  let message;

  if (props.status === "loding") {
    message = "page is loding";
  } else if (props.status === "success") {
    message = "page loded success fully";
  } else if (props.status === "error") {
    message = "error";
  }

  return (
    <div>
      <h1> {message}</h1>
    </div>
  );
};

export default Status;
