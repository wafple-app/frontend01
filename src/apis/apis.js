import Constants from "expo-constants";
const { API_BASE_URL } = Constants.manifest.extra.env;

export const getAllMenus = () => {
  return fetch(`${API_BASE_URL}/foods`)
    .then((response) => response.json())
    .then((json) => {
      return json.result;
    });
};

export const getRestaurant = (id) => {
  return fetch(`${API_BASE_URL}/restaurant/${id}`)
    .then((response) => response.json())
    .then((json) => {
      return json.result;
    });
};
