import React, {createContext,useState} from "react"



export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    
    const [user,setUser]= useState(null)

    const login = (email,password) => {
        console.log('login auth' ,{email,password});
        setUser({id: "1",email})
    }


    const logout = () => {}

    return(
        <AuthContext.Provider value = {{authenticated:!!user,user,login}}>
            
          {children}    
        </AuthContext.Provider>
    )


}