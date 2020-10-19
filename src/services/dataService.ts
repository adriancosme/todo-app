import http from "../http-common";

class DataService {
  getAll() {
    return http.get("/todos");
  }
}

export default new DataService();