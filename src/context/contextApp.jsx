import { createContext, useState } from "react";

export const contextApp = createContext();

export const AppProvider = ({ children }) => {
  const [jsonData, setJsonData] = useState(JSON.parse(localStorage.getItem('task')) || []);
  const [count, setCount] = useState(jsonData.length);
  const [error, setError] = useState('');

  const [input, setInput] = useState({
    title: "",
    description: "",
  })

  const value = {
    jsonData,
    count,
    input,
    error,
    setError,
    setInput,
    setJsonData,
    setCount,
  }

  return (
    <contextApp.Provider value={value}>
      {children}
    </contextApp.Provider>
  )

}