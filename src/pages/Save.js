import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = "https://friendbook-java.herokuapp.com/friend";
// const url = "http://localhost:8080/friend";
function Save() {
  const navigate = useNavigate();
  const [person, setPerson] = useState({
    name: "",
    phoneNumber: "",
    dob: "",
    address: "",
    link: "",
    info: "",
  });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (person.name &&
        person.phoneNumber &&
        person.dob &&
        person.address &&
        person.link,
      person.info)
    ) {
      const newPerson = { ...person };
      setPeople([...people, newPerson]);
      axios.post(url, person);
      navigate("/");
      setPerson({
        name: "",
        phoneNumber: "",
        dob: "",
        address: "",
        link: "",
        info: "",
      });
    }
  };
  //link, name, phoneNumber, dob, address, info
  return (
    <>
      <article className="form">
        <form>
          <div className="form-control">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              id="name"
              name="name"
              value={person.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="phoneNumber">Phone Number : </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={person.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="dob">D.O.B : </label>
            <input
              type="text"
              id="dob"
              name="dob"
              value={person.dob}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="address">Address : </label>
            <input
              type="text"
              id="address"
              name="address"
              value={person.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="link">Image Link :</label>
            <input
              type="text"
              id="link"
              name="link"
              value={person.link}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="info">Information : </label>
            <textarea
              rows={5}
              id="info"
              name="info"
              value={person.info}
              onChange={handleChange}
            >
              Enter details here...
            </textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-details"
            onClick={handleSubmit}
          >
            add person
          </button>
        </form>
      </article>
    </>
  );
}

export default Save;
