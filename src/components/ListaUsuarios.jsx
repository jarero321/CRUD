import React, { useContext } from "react";
import { GridContext } from "../context/GridContext";

import { SectionUsuarios } from "../Styles/ListaUsuariosStyles";
const ListaUsuarios = () => {
    const { Users, setUsers, setRegistro, filter , FilterisOn } = useContext(GridContext)

    // boton eliminar
    const OnErase = (e) =>{
        e.preventDefault();
        const id = e.currentTarget.id;
        setUsers(Users.filter(registro => registro.id !== id ));
    }
    // boton editar

    const OnEditar = (e) => {
        e.preventDefault();
        const id = e.currentTarget.id;
        const itemEdit = Users.filter(registro => registro.id == id);
        setRegistro(itemEdit[0]);
        setUsers(Users.filter(registro => registro.id !== id ))


    }
    return (
        <SectionUsuarios>
            {
                // detecta si la lista de usuarios esta vacia o no
                (Users.length == 0) ? (<h2>
                    No hay registros
                </h2>)
                    :
                    // si filter esta activo o no
                    (
                    (FilterisOn) ?
                    (
                        Users.map(item => (
                            item.id.includes(filter) &&
                        <div id={item.id}
                             key={item.id}>
                            <h2>
                                ID:{ item.id }
                            </h2>
                            <h2>
                                Usuario:{ item.usuario}
                            </h2>
                            <h2>
                                Email:{ item.email }
                            </h2>
                            <h2>
                                Fecha:{ item.fecha }
                            </h2>
                            <h2>
                                Edad:{ item.edad }
                            </h2>
                            <button type="button"
                                    onClick = {OnErase}
                                    id = {item.id}
                                    >
                                        Eliminar
                            </button>
                            <button type="button"
                                    id = {item.id}
                                    onClick = {OnEditar}
                                    >
                                        Editar
                            </button>
                        </div>
                    )))
                    :
                    ((
                        Users.map(item => (
                        <div id={item.id}
                             key={item.id}>
                            <h2>
                                ID:{ item.id }
                            </h2>
                            <h2>
                                Usuario:{ item.usuario}
                            </h2>
                            <h2>
                                Email:{ item.email }
                            </h2>
                            <h2>
                                Fecha:{ item.fecha }
                            </h2>
                            <h2>
                                Edad:{ item.edad }
                            </h2>
                            <button type="button"
                                    onClick = {OnErase}
                                    id = {item.id}
                                    >
                                        Eliminar
                            </button>
                            <button type="button"
                                    id = {item.id}
                                    onClick = {OnEditar}
                                    >
                                        Editar
                            </button>
                        </div>
                    )))))
            }
        </SectionUsuarios>
    )
}
export default ListaUsuarios;