import { useState, createContext } from "react";
export const LogContext = createContext()
function LogContextProvider(props) {
 const [login, setLogin]=useState(true)
 return(
<LogContext.Provider value={{login, setLogin}}>
  {props.children}
</LogContext.Provider>  )}
export default LogContextProvider