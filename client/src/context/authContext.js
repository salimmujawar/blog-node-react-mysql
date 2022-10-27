import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

//We create a context provider so within our app we can use the data
export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

  const login = async(inputs)=>{
    const res = await axios.post("/auth/login", inputs);
    setCurrentUser(res.data)
  }

  const logout = async(inputs)=>{
    await axios.post("/auth/logout");
    setCurrentUser(null)
  }

  //to change current user will use useEffect Hook
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser))
  }, [currentUser])

  return <AuthContext.Provider value={{currentUser, login, logout}}>{children}</AuthContext.Provider>
}