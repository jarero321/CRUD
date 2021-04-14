import React, { useContext , useState } from "react";

import { GridContext } from "../context/GridContext";

import {SectionFormulario} from "../Styles/FormularioStyles";
const Formulario = () => {
    const { Users, setUsers, Registro, setRegistro} = useContext(GridContext)
    // estado que guarda si el formulario se envia vacio
    const [Validation, setValidation] = useState(false)

    // funcion que registra cualquier cambio
    const OnChange = (e) => {
        e.preventDefault();
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setRegistro(
            {
                ...Registro,
                [name]: value
            }
        )
    }
    // funcion que comprueba y registra el usuario

    const OnClick = (e) => {
        e.preventDefault();
        // comprobar que ningun campo este en vacio
        if (id.trim() == "" || usuario.trim() == "" || email.trim() == "" || fecha.trim() == "" || edad.trim() == "") {
            setValidation(true)
        }else{
            setValidation(false);
            setUsers([...Users,Registro]);
            // resetear formulario
            setRegistro({
                id : "" ,
                usuario : "",
                email : "",
                fecha : "",
                edad : "",
            })
        }
    }

    // destructuring a registro

    const { id, usuario, email, fecha, edad } = Registro

    return (
        <SectionFormulario>
            <form>
                <input type="number"
                    placeholder="ingrese el id"
                    value={id}
                    name="id"
                    onChange={OnChange} />

                <input type="text"
                    placeholder="ingrese el usuario"
                    value={usuario}
                    name="usuario"
                    onChange={OnChange} />

                <input type="e-mail"
                    placeholder="ingrese el correo"
                    value={email}
                    name="email"
                    onChange={OnChange} />


                <input type="date"
                    placeholder="ingrese la fecha"
                    value={fecha}
                    name="fecha"
                    onChange={OnChange} />

                <input type="number"
                    placeholder="ingrese la edad"
                    value={edad}
                    name="edad"
                    onChange={OnChange} />

                <button type="submit"
                    onClick={OnClick}
                >
                    Registrar usuario
            </button>
            </form>
            {
                (Validation) && ( 
                    <h2>
                        Rellene todos los campos correspondientes
                    </h2>
                )
            }
        </SectionFormulario>

    )
}
export default Formulario;