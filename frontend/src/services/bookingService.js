import api from "./api";
// CREATE BOOKING
// ============================================

export const createBooking = async (
  routeId,
  travelDate,
  seatsBooked,
  passengerNames
) => {
  const response = await api.post("/bookings", {
    routeId,
    travelDate,
    seatsBooked,
    passengerNames,
  });

  return response.data;
};


// ============================================
// GET MY BOOKINGS
// ============================================

export const getMyBookings = async () => {
  const response = await api.get("/bookings/my");

  return response.data;
};


// ============================================
// TRACK BOOKING BY PNR
// ============================================

export const trackByPNR = async (pnr) => {
  const response = await api.get(
    `/bookings/track/${pnr}`
  );

  return response.data;
};


// ============================================
// CANCEL BOOKING
// ============================================

export const cancelBooking = async (bookingId) => {
  const response = await api.put(
    `/bookings/${bookingId}/cancel`
  );

  return response.data;
};