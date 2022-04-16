import React from "react";
import { Link } from "react-router-dom";
import { useSuperHeroData } from "../Hooks/useSuperHeroData";

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Side Effect after success", data);
  };
  const onError = (error) => {
    console.log("side Effect after Error", error);
  };
  const { isLoading, data, isError, isFetching, error, refetch } =
    useSuperHeroData(onSuccess, onError);
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQSuperHeroesPage</h2>
      <button onClick={refetch}>Fetch heroes</button>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
      {/* {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
    </>
  );
};
