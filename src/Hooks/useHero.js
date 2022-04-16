import { useQuery } from "react-query";
import axios from "axios";

const fetchHero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};
export const useHero = (heroId) => {
  return useQuery(["hero", heroId], fetchHero);
};
