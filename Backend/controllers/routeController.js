import Route from "../models/Route.js";

// @route GET /api/routes
// Supports search: /api/routes?from=Village A&to=City B&date=2026-08-25
export const getRoutes = async (req, res, next) => {
  try {
    const { from, to } = req.query;
    const filter = { isActive: true };

    if (from) filter.from = { $regex: from, $options: "i" };
    if (to) filter.to = { $regex: to, $options: "i" };

    const routes = await Route.find(filter).sort({ departureTime: 1 });
    res.json(routes);
  } catch (error) {
    next(error);
  }
};

// @route GET /api/routes/:id
export const getRouteById = async (req, res, next) => {
  try {
    const route = await Route.findById(req.params.id);
    if (!route) {
      return res.status(404).json({ message: "Route not found" });
    }
    res.json(route);
  } catch (error) {
    next(error);
  }
};

// @route POST /api/routes  (admin only)
export const createRoute = async (req, res, next) => {
  try {
    const route = await Route.create(req.body);
    res.status(201).json(route);
  } catch (error) {
    next(error);
  }
};

// @route PUT /api/routes/:id  (admin only)
export const updateRoute = async (req, res, next) => {
  try {
    const route = await Route.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!route) {
      return res.status(404).json({ message: "Route not found" });
    }
    res.json(route);
  } catch (error) {
    next(error);
  }
};

// @route DELETE /api/routes/:id  (admin only)
export const deleteRoute = async (req, res, next) => {
  try {
    const route = await Route.findByIdAndDelete(req.params.id);
    if (!route) {
      return res.status(404).json({ message: "Route not found" });
    }
    res.json({ message: "Route deleted" });
  } catch (error) {
    next(error);
  }
};
