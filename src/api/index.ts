import { LoginPayload, TrackPayload, TrackShipmentResponse } from './types';
import client from './client';

export const login = (payload: LoginPayload) => {
  return client.post(`/api/method/login`, payload);
};

export const trackShipment = (params: TrackPayload) => {
  return client.get<TrackShipmentResponse>(`/api/method/frappe.client.get`, { params });
};
