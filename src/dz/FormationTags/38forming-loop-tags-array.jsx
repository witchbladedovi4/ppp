import React from "react";

const FormingLoopTagsArray = () => {
  const arr = [];

  for (let i = 0; i <= 5; i++) {
    arr.push(<li key={i}>{i}</li>);
  }

  return <ul>{arr}</ul>;
};

export default FormingLoopTagsArray;
