
import React, { useContext } from "react";

import { GridContext } from "../context/GridContext";
import {FormularioSearch} from "../Styles/SearchBarStyles";
const SearchBar = () => {
    const { Users, filter, setfilter, setFilterisOn } = useContext(GridContext)
    const onChangeFilter = (e) => {
        setFilterisOn(true);
        const value = e.currentTarget.value;
        if (value.trim() == "") {
            setFilterisOn(false)
            setfilter(value)
        } else {
            setfilter(value)
        }
    }
    return (
        <FormularioSearch>
            <input type="number"
                placeholder="ingrese el id"
                onChange={onChangeFilter}
                value={filter} />
        </FormularioSearch>
    )
}
export default SearchBar;