import React, { useEffect } from "react";
import { useGetAllProductQuery } from "./contentReducer";

const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductQuery();

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isError) {
    return <h1>Oh no! We got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data?.history?.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <p>{product.body}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
