import React, { memo } from "react";

const ProductUpdate = ({ editProduct, render }) => {
  console.log(editProduct);
  console.log(render);

  return <div>ProductUpdate</div>;
};

export default memo(ProductUpdate);
