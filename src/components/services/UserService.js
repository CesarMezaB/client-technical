import http from "../http-common";

class UserService {
  getAll() {
    return http.get("/users");
  }
 
  create(data) {
    return http.post("/users", data);
  }
 
}

export default new UserService();