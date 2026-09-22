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
      return true;
    } else {
      return false;
    }
  }

  async function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
