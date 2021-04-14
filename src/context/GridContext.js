import React, { createContext, useState } from "react";

export const GridContext = createContext();
export const GridProvider = ({ children }) => {
    // estado que guardara la lista de usuarios registrados
    const [Users, setUsers] = useState([]);
    // estado que tendra valores del formulario
    const [Registro, setRegistro] = useState({
        id : "" ,
        usuario : "",
        email : "",
        fecha : "",
        edad : "",
    })
    // estado filtro 
    const [filter, setfilter] = useState([]);
    const [FilterisOn, setFilterisOn] = useState(false);
    return (
        <GridContext.Provider
        value = {{
            Users, setUsers,
            Registro , setRegistro,
            filter, setfilter,
            FilterisOn , setFilterisOn
        }}>
            { children }
        </GridContext.Provider>
    )
}