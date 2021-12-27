import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import axios from "axios";

// const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const url = "https://friendbook-java.herokuapp.com/friend";
// const url = "http://localhost:8080/friend";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(() => {
    setLoading(true);
    try {
      axios.get(`${url}`).then((response) => {
        const data = response.data;
        console.log(data);
        if (data) {
          const newCocktails = data.map((item) => {
            const { id, link, name, place, phoneNumber } = item;

            return {
              id: id,
              image: link,
              name: name,
              info: place,
              glass: phoneNumber,
            };
          });
          setCocktails(newCocktails);
        } else {
          setCocktails([]);
        }
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);
  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
