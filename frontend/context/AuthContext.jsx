import { createContext, useContext, useEffect, useState } from "react";
import userData from '../mocks/user.json';


const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  let isLoggedIn = user ? true : false;

  async function login(email, password) {
    if(email === userData.email) {
      setUser(userData);
      setLoading(false);
      return true;
    } else {
      setLoading(false);
      return false;
    }
  }

  async function register(username, email, password) {
    let registeredUser = {
      username: username,
      email: email,
      password: password
    };

    console.log(registeredUser);
    console.log(JSON.stringify(registeredUser));

    setLoading(false);
    return registeredUser
  }

  async function logout() {
    setLoading(false);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
