import { useQuery } from "react-query";
import { venderFetcher } from "./api";
import { UseVenderFetchType } from "./type";

export const useVenderFetch: UseVenderFetchType = (params, token) => {
  return useQuery(["Device-page-query", params, token], venderFetcher, {
    onError: (err) => {
      console.log(err.message);
    },
  });
};
