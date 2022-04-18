import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchColors = () => {
  return axios.get("http://localhost:4000/colors");
};
export const PaginatedQueriesPage = () => {
  const { isLoading, data, isError, error } = useQuery("colors", fetchColors);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <h2>PaginatedQueriesPage</h2>
      {data?.data.map((color) => {
        return (
          <div key={color.id}>
            <h2>
              {color.id}. {color.label}
            </h2>
          </div>
        );
      })}
    </div>
  );
};
