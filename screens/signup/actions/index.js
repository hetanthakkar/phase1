import ADD_USER from "./types";
export const addUser = (user) => {
  return {
    payload: user,
    type: "ADD_USER",
  };
};
export const currentId = (id) => {
  return {
    payload: id,
    type: "CURRENT_USER_ID",
  };
};
