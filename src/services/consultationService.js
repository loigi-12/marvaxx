import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/consultations";

function consultationUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getConsultations() {
  return http.get(apiEndpoint);
}

export function getConsultation(consultationId) {
  return http.get(consultationUrl(consultationId));
}

export function saveConsultation(consultation) {
  if (consultation._id) {
    const body = { ...consultation };
    delete body._id;
    return http.put(consultationUrl(consultation._id), body);
  }

  return http.post(apiEndpoint, consultation);
}

export function deleteConsultation(consultationId) {
  return http.delete(consultationUrl(consultationId));
}
