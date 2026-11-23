import React from "react";

const IdRandomStrings = () => {
  const prods = [
    { id: "GYi9G_uC4gBF1e2SixDvu", name: "product1", cost: 100 },
    { id: "IWSpfBPSV3SXgRF87uO74", name: "product2", cost: 200 },
    { id: "JAmjRlfQT8rLTm5tG2m1L", name: "product3", cost: 300 },
  ];
  const result = prods.map((item) => {
    return (
      <p key={item.id}>
        <span>{item.name}</span>: <span>{item.cost}</span> id: <span>{item.id}</span>
      </p>
    );
  });
  return <div>{result}</div>;
};

export default IdRandomStrings;
