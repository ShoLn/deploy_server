import axios from "axios";
import { VenGetType } from "./type";

export const venderFetcher: VenGetType = async (context) => {
  const [, params, token] = context.queryKey;

  const res = await axios({
    ...token,
    params:{
        ...params
    }
  });
  
  return res.data;
};
