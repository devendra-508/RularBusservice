import api from "./api";

// Used by the Hero search form ("From" / "Destination")
export const searchRoutes = async (from, to) => {
  const { data } = await api.get("/routes", { params: { from, to } });
  return data;
};

export const getAllRoutes = async () => {
  const { data } = await api.get("/routes");
  return data;
};

export const getRouteById = async (id) => {
  const { data } = await api.get(`/routes/${id}`);
  return data;
};