import axios from "axios";
import { END_POINT } from "../../config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
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
          console.log("token", response.data.token);
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
          localStorage.setItem(
            "token_res",
            JSON.stringify(response.data.token)
          );
        }
        console.log("token-res", response);
        return response.data;
      });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
