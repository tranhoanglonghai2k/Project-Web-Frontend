import axios from "axios";
import { END_POINT } from "../../config";
import { useHistory } from "react-router-dom";
class AuthService {
  login(email, password) {
    return axios
      .post(END_POINT + "/users/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", JSON.stringify(response.data.token));
          console.log("token", localStorage.getItem("token"));
        }
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, email, password) {
    return axios
      .post(END_POINT + "/users", {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", JSON.stringify(response.data.token));
        }

        console.log("token", response);
        return response.data;
      });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
