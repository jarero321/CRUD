import React from "react";
import Formulario from "./Formulario";
import ListaUsuarios from "./ListaUsuarios";
import SearchBar from "./SearchBar";
import { Section, Search, Container, FormularioContainer, ListaUsuariosContainer } from "../Styles/GridStyles"
const Grid = () => {
    return (
        <Section>
            <Search>
                <h3>
                    Barra de Busqueda
                </h3>
                <SearchBar />
            </Search>
            <Container>
                <FormularioContainer>
                    <h3>
                        Formulario
                    </h3>
                    <Formulario />
                </FormularioContainer>
                <ListaUsuariosContainer>
                    <h3>
                        Lista de Usuarios
                    </h3>
                    <ListaUsuarios />
                </ListaUsuariosContainer>
            </Container>
        </Section>
    )
}
export default Grid;