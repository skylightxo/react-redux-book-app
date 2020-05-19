import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001/authors/";

export function getAuthors() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
