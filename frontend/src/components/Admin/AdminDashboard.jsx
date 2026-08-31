import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, X, Loader2, ShieldAlert, ArrowLeft, Bus } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { getAllRoutes } from "../../services/routeService";
import { createRoute, updateRoute, deleteRoute } from "../../services/adminService";

const emptyForm = {
  busName: "",
  busNumber: "",
  from: "",
  to: "",
  departureTime: "",
  arrivalTime: "",
  durationMinutes: "",
  fare: "",
  totalSeats: "",
  availableSeats: "",
  busType: "Standard",
};

export default function AdminDashboard() {
  const { user, loading: authLoading } = useAuth();

  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [formError, setFormError] = useState("");
  const [saving, setSaving] = useState(false);

  const fetchRoutes = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getAllRoutes();
      setRoutes(data);
    } catch (err) {
      setError("Could not load routes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.role === "admin") {
      fetchRoutes();
    }
  }, [user]);

  const openAddForm = () => {
    setEditingId(null);
    setForm(emptyForm);
    setFormError("");
    setIsFormOpen(true);
  };

  const openEditForm = (route) => {
    setEditingId(route._id);
    setForm({
      busName: route.busName,
      busNumber: route.busNumber,
      from: route.from,
      to: route.to,
      departureTime: route.departureTime,
      arrivalTime: route.arrivalTime,
      durationMinutes: route.durationMinutes,
      fare: route.fare,
      totalSeats: route.totalSeats,
      availableSeats: route.availableSeats,
      busType: route.busType,
    });
    setFormError("");
    setIsFormOpen(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setSaving(true);

    const payload = {
      ...form,
      durationMinutes: Number(form.durationMinutes),
      fare: Number(form.fare),
      totalSeats: Number(form.totalSeats),
      availableSeats: Number(form.availableSeats),
    };

    try {
      if (editingId) {
        await updateRoute(editingId, payload);
      } else {
        await createRoute(payload);
      }
      setIsFormOpen(false);
      fetchRoutes();
    } catch (err) {
      setFormError(err.response?.data?.message || "Could not save route.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this route? This cannot be undone.")) return;
    try {
      await deleteRoute(id);
      fetchRoutes();
    } catch (err) {
      alert(err.response?.data?.message || "Could not delete route.");
    }
  };

  if (authLoading) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-green-50 via-white to-white box-border">
        <Loader2 size={28} className="animate-spin text-green-600" />
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-green-50 via-white to-white px-6 text-center box-border">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
          <ShieldAlert size={32} />
        </div>
        <h2 className="text-2xl font-black text-gray-900">Access Denied</h2>
        <p className="text-gray-500">You need admin access to view this page.</p>
        <a
          href="/"
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-600 px-5 py-2.5 text-sm font-semibold text-green-700 transition hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          <ArrowLeft size={16} />
          Back to Site
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-green-50 via-white to-white px-4 box-border sm:px-6 lg:px-8">
      {/* Top bar — contained, matches content width below, never touches the browser edge */}
      <header className="sticky top-0 z-40 -mx-4 w-auto border-b border-gray-100 bg-white/80 backdrop-blur-xl box-border sm:-mx-6 lg:-mx-8">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex min-w-0 shrink-0 items-center gap-2">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-600 text-white">
              <Bus size={20} />
            </div>
            <span className="truncate text-base font-bold text-gray-900 sm:text-lg">
              Rural<span className="text-green-600">Bus</span> Admin
            </span>
          </div>

          <a
            href="/"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-semibold text-gray-500 transition hover:bg-gray-50 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <ArrowLeft size={16} />
            <span>Back to Site</span>
          </a>
        </div>
      </header>

      {/* Main content — same max-w-7xl as header, padding now comes from the root wrapper */}
      <main className="mx-auto w-full max-w-7xl box-border py-6 sm:py-8 lg:py-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-xl font-black text-gray-900 sm:text-2xl lg:text-3xl">
              Admin Dashboard
            </h1>
            <p className="mt-1 text-sm text-gray-500">Manage all bus routes</p>
          </div>
          <button
            type="button"
            onClick={openAddForm}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <Plus size={18} />
            Add Route
          </button>
        </div>

        {/* Manage bus routes box */}
        <div className="mt-6 w-full min-w-0 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm sm:mt-8 sm:p-4 box-border">
          {loading && (
            <div className="flex items-center justify-center gap-2 py-16 text-gray-500">
              <Loader2 size={22} className="animate-spin" />
              Loading routes...
            </div>
          )}

          {!loading && error && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center text-sm text-red-600">
              {error}
            </div>
          )}

          {!loading && !error && routes.length === 0 && (
            <div className="px-4 py-16 text-center text-gray-400">
              No routes yet. Click "Add Route" to create one.
            </div>
          )}

          {!loading && !error && routes.length > 0 && (
            <>
              {/* Mobile / tablet: card list */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
                {routes.map((route) => (
                  <div
                    key={route._id}
                    className="min-w-0 rounded-xl border border-gray-100 p-4 transition hover:bg-green-50/40"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-gray-900">{route.busName}</p>
                        <p className="truncate text-xs text-gray-400">
                          {route.busNumber} · {route.busType}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-1">
                        <button
                          type="button"
                          onClick={() => openEditForm(route)}
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-500 transition hover:bg-green-50 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                          title="Edit"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(route._id)}
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-500 transition hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    <p className="mt-3 truncate text-sm text-gray-700">
                      {route.from} <span className="text-gray-300">→</span> {route.to}
                    </p>
                    <p className="mt-1 truncate text-sm text-gray-500">
                      {route.departureTime} - {route.arrivalTime}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 pt-3">
                      <span className="font-semibold text-green-700">₹{route.fare}</span>
                      <span className="whitespace-nowrap text-xs font-medium text-gray-500">
                        {route.availableSeats}/{route.totalSeats} seats
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: table */}
              <div className="hidden w-full min-w-0 overflow-hidden rounded-xl border border-gray-100 lg:block">
                <div className="w-full overflow-x-auto">
                  <table className="w-full table-fixed text-left text-sm">
                    <colgroup>
                      <col className="w-[20%]" />
                      <col className="w-[22%]" />
                      <col className="w-[16%]" />
                      <col className="w-[10%]" />
                      <col className="w-[12%]" />
                      <col className="w-[20%]" />
                    </colgroup>
                    <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Bus</th>
                        <th className="px-4 py-3 font-semibold">Route</th>
                        <th className="px-4 py-3 font-semibold">Timing</th>
                        <th className="px-4 py-3 font-semibold">Fare</th>
                        <th className="px-4 py-3 font-semibold">Seats</th>
                        <th className="px-4 py-3 text-right font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {routes.map((route) => (
                        <tr key={route._id} className="align-middle transition hover:bg-green-50/40">
                          <td className="px-4 py-3">
                            <p className="truncate font-semibold text-gray-900" title={route.busName}>
                              {route.busName}
                            </p>
                            <p className="truncate text-xs text-gray-400">
                              {route.busNumber} · {route.busType}
                            </p>
                          </td>
                          <td className="px-4 py-3 text-gray-700">
                            <span className="block truncate" title={`${route.from} → ${route.to}`}>
                              {route.from} → {route.to}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-gray-500">
                            <span className="block truncate">
                              {route.departureTime} - {route.arrivalTime}
                            </span>
                          </td>
                          <td className="px-4 py-3 font-semibold text-green-700">₹{route.fare}</td>
                          <td className="px-4 py-3 text-gray-500">
                            {route.availableSeats}/{route.totalSeats}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                type="button"
                                onClick={() => openEditForm(route)}
                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-500 transition hover:bg-green-50 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                title="Edit"
                              >
                                <Pencil size={16} />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDelete(route._id)}
                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-500 transition hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                                title="Delete"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {isFormOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4 box-border"
          onClick={() => setIsFormOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl min-w-0 rounded-2xl bg-white p-5 shadow-2xl box-border sm:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-black text-gray-900 sm:text-xl">
                {editingId ? "Edit Route" : "Add New Route"}
              </h2>
              <button
                onClick={() => setIsFormOpen(false)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                name="busName" placeholder="Bus Name" value={form.busName} onChange={handleChange} required
                className="w-full min-w-0 rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none box-border focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
              <input
                name="busNumber" placeholder="Bus Number (e.g. RB-101)" value={form.busNumber} onChange={handleChange} required
                className="w-full min-w-0 rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none box-border focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
              <input
                name="from" placeholder="From" value={form.from} onChange={handleChange} required
                className="w-full min-w-0 rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none box-border focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
              <input
                name="to" placeholder="To" value={form.to} onChange={handleChange} required
                className="w-full min-w-0 rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none box-border focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
              <input
                name="departureTime" placeholder="Departure (e.g. 07:30 AM)" value={form.departureTime} onChange={handleChange} required
                className="w-full min-w-0 rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none box-border focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
              <input
                name="arrivalTime" placeholder="Arrival (e.g. 10:00 AM)" value={form.arrivalTime} onChange={handleChange} required
                className="w-full min-w-0 rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none box-border focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
              <input
                name="durationMinutes" type="number" placeholder="Duration (minutes)" value={form.durationMinutes} onChange={handleChange} required
                className="w-full min-w-0 rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none box-border focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
              <input
                name="fare" type="number" placeholder="Fare (₹)" value={form.fare} onChange={handleChange} required
                className="w-full min-w-0 rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none box-border focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
              <input
                name="totalSeats" type="number" placeholder="Total Seats" value={form.totalSeats} onChange={handleChange} required
                className="w-full min-w-0 rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none box-border focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
              <input
                name="availableSeats" type="number" placeholder="Available Seats" value={form.availableSeats} onChange={handleChange} required
                className="w-full min-w-0 rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none box-border focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
              <select
                name="busType" value={form.busType} onChange={handleChange}
                className="w-full min-w-0 rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none box-border focus:border-green-500 focus:ring-2 focus:ring-green-100 sm:col-span-2"
              >
                <option value="Standard">Standard</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Mini">Mini</option>
              </select>

              {formError && (
                <p className="text-sm font-medium text-red-600 sm:col-span-2">{formError}</p>
              )}

              <button
                type="submit"
                disabled={saving}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-green-600 text-sm font-bold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-70 sm:col-span-2"
              >
                {saving ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Saving...
                  </>
                ) : editingId ? (
                  "Update Route"
                ) : (
                  "Create Route"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}