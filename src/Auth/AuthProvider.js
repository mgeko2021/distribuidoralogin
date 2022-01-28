import { TrainRounded } from "@material-ui/icons"
import { createContext } from "react"
import { useState } from "react"


export const AuthContext = createContext() // es el contexto que va a contener la info

const AuthProvider = ({children}) => {  //aqui genero la autenticacion con un conetxo de los datos para darselo a todos los compoennete hijos y asi mismo se renderizen o no

    const [user, setUser] = useState(null)
    const [tokenAuth, setTokenAuth] = useState(true)
    const [itemProductBuy, setItemProductBuy] = useState(null)
    const [ligth, setLight] = useState()

    const contextValue ={
        ligth,
        upLigth(ligth){
            setLight(ligth)
        },
        tokenAuth,
        upToken(token){
            setTokenAuth(token)
        },
        user,
        login(user) {
            setUser(user)
            
        },
        itemProductBuy,
        changeProduct(itemProductBuy) {
            setItemProductBuy(itemProductBuy)
            
        }
        // ,
        // logout () {
        //     setUser(null)
        // },
        // isLogged() {
        //     return !! user;
        // }
        
    }

    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;