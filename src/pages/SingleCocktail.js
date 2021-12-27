import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        axios
          .get(`https://friendbook-java.herokuapp.com/friend/${id}`)
          // .get(`http://localhost:8080/friend/${id}`)
          .then((response) => {
            const data = response.data;
            console.log(data);
            if (data) {
              setCocktail(data);
            } else {
              setCocktail(null);
            }
          });
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    // const { name, image, category, info, glass, instructions, ingredients } =
    //   cocktail;
    const { link, name, phoneNumber, dob, address, info } = cocktail;
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={link} alt={name}></img>
          <div className="drink-info">
            <p>
              <span className="drink-data">name :</span> {name}
            </p>
            <p>
              <span className="drink-data">Phone Number :</span> {phoneNumber}
            </p>
            <p>
              <span className="drink-data">DOB :</span> {dob}
            </p>
            <p>
              <span className="drink-data">Address :</span> {address}
            </p>
            <p>
              <span className="drink-data">Info :</span> {info}
            </p>
            {/* <p>
              <span className="drink-data">ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null;
              })}
            </p> */}
          </div>
        </div>
      </section>
    );
  }
}
