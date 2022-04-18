import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchHero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};
export const useHero = (heroId) => {
  const queryclient = useQueryClient();
  return useQuery(["hero", heroId], fetchHero, {
    initialData: () => {
      const hero = queryclient
        .getQueryData("super-heroes")
        ?.data?.find((hero) => heroId === parseInt(heroId));
      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
};
