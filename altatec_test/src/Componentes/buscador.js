import React, { useEffect, useState } from "react";
import buscar from '../svg/Buscar.svg';
import filtrar from '../svg/Filtrar.svg';

function Buscador(props) {
    // const { onResult, sourceUrls } = props;

    // const [searchKeyword, setSearchKeyword] = useState('');
    // const [searchFilter, setSearchFilter] = useState('');
    // let dataResult = []

    // const searchCharacters = () => {
    //     let search = document.getElementById('search').value;
    //     setSearchKeyword(search)
    // }
    // const searchFilters = () => {
    //     let filter = document.getElementById('filter').value;
    //     setSearchFilter(filter)
    // }

    // const getData = (op) => {
    //     if (op == 0) {
    //         dataResult = []
    //         onResult(dataResult)
    //     }
    // }

    // useEffect(() => {
    //     let search = document.getElementById('search').value;
    //     let filter = document.getElementById('filter').value;
    //     if (search == '' && filter == '') {
    //         getData(0)
    //     } else {
    //         // const searchURL = sourceUrls[searchFilter]
    //         // console.log(searchURL)
    //     }
    // }, [searchKeyword, searchFilter])

    return (
        <div class="container-fluid text-start mt-5 margenes col-lg-12 row">
            <div class='col-lg-2'>
                <h4 class='fw-bold'>Personajes</h4>
            </div>
            <div class='col-lg-3'>
                <div class="input-group">
                    {/* <input type="text" class="form-control" id='search' placeholder="Buscar" aria-label="Buscar" onKeyUp={searchCharacters} aria-describedby="basic-addon2" /> */}
                    <input type="text" class="form-control" id='search' placeholder="Buscar" aria-label="Buscar" aria-describedby="basic-addon2" />
                    <span class="input-group-text" id="basic-addon2"><img src={buscar} alt='buscador' /></span>
                </div>
            </div>
            <div class='col-lg-3'>
                <div class="input-group">
                    <select class="form-control" id='filter'>
                    {/* <select class="form-control" onChange={searchFilters} id='filter'> */}
                        <option value=''>Selecciona uno</option>
                        <option value='Female'>Female</option>
                        <option value='Male'>Male</option>
                        <option value='Genderless'>Genderless</option>
                        <option value='Unknown'>Unknown</option>
                    </select>
                    <span class="input-group-text" id="basic-addon2"><img src={filtrar} alt='filtro' /></span>
                </div>
            </div>
        </div>

    )
}
export default Buscador;
