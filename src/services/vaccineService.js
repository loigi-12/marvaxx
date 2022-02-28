import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/vaccines";

function vaccineUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getVaccines() {
  return http.get(apiEndpoint);
}

export function getVaccine(vaccineId) {
  return http.get(vaccineUrl(vaccineId));
}

export function saveVaccine(vaccine) {
  if (vaccine._id) {
    const body = { ...vaccine };
    delete body._id;
    return http.put(vaccineUrl(vaccine._id), body);
  }

  return http.post(apiEndpoint, vaccine);
}

export function deleteVaccine(vaccineId) {
  return http.delete(vaccineUrl(vaccineId));
}
