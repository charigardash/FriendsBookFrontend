import React, { useEffect, useState } from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import AuthService from "../services/auth.service";
export default function Home() {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user && user.headers) {
      setCurrentUser(user);
    }
  }, []);
  if (currentUser) {
    return (
      <main>
        <SearchForm />
        <CocktailList />
      </main>
    );
  }
  if (!currentUser) {
    return <h1>Login/Signup to see friends</h1>;
  }
}
