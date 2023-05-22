import baseUrl from "../api/BaseURL";

export const UseCreateData = async (apiUrl, param) => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
  const response = await baseUrl.post(apiUrl, param,config);
  return response;
};
