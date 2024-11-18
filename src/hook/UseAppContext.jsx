import { useContext } from "react";
import { AppContext } from "../App";

export default function UseAppContext(){
    const context = useContext(AppContext);

    /* Para apontar erro caso o hook seja usado fora do contexto */
    if(!context){
        throw new Error("useAppContext deve ser usado dentro de um AppContextProvider");
    }
    return context;
}