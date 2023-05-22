import baseUrl from "../api/BaseURL";

export const UseGetData = async (apiUrl, param) => {
  const respones = await baseUrl.get(apiUrl, param);
  return respones;
};
