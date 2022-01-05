import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
function Login(props) {
  const navigate = useNavigate();
  const [person, setPerson] = useState({
    username: "",
    password: "",
  });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.username && person.password) {
      const newPerson = { ...person };
      setPeople([...people, newPerson]);
      AuthService.login(person).then(
        () => {
          // props.history.push("/");
          navigate("/");
          window.location.reload();
        }
        // ,
        // (error) => {
        //   const resMessage =
        //     (error.response &&
        //       error.response.data &&
        //       error.response.data.message) ||
        //     error.message ||
        //     error.toString();

        //   // setLoading(false);
        //   // setMessage(resMessage);
        // }
      );

      // setPerson({
      //   username: "",
      //   password: "",
      // });
      // navigate("/");
      // // window.location.reload();
    }
  };
  return (
    <>
      <article className="form">
        <form>
          <div className="form-control">
            <label htmlFor="username">Name : </label>
            <input
              type="text"
              id="username"
              name="username"
              value={person.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              name="password"
              value={person.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-details"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </article>
    </>
  );
}

export default Login;
