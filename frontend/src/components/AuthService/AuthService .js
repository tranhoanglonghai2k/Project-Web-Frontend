import axios from "axios";
import { END_POINT } from "../../config";
// const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(name, password) {
    return axios.post(END_POINT + "/users/login", {
      // email,
      password,
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, email, password) {
    return axios
      .post(END_POINT + "/users", {
        name,
        email,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
