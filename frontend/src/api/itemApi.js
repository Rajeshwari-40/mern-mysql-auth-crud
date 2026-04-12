import API from "./axios";

export const getItems = () => API.get("/items");
export const createItem = (data) => API.post("/items", data);  