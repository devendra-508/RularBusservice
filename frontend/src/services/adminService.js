import api from "./api";

export const createRoute = async (routeData) => {
  const { data } = await api.post("/routes", routeData);
  return data;
};

export const updateRoute = async (id, routeData) => {
  const { data } = await api.put(`/routes/${id}`, routeData);
  return data;
};

export const deleteRoute = async (id) => {
  const { data } = await api.delete(`/routes/${id}`);
  return data;
};