import React, { useEffect, useState } from "react";

function Personajes(props) {
    const [characters, setCharacters] = useState();

    const url = props.chraracters;
    async function getDataCharacters() {
        const dataRequest = await fetch(url);
        const dataJSON = await dataRequest.json();
        setCharacters(dataJSON);
        return dataJSON;
    }
    
    useEffect(() => {
        if (url) {
            getDataCharacters();
        }
    }, [url]);

    return (
        <div className='col-lg-12 row mt-5 margenes'>
            {
                !characters ? 'Cargando... ' : characters.results.map((personaje, i) => {
                    return (
                        <div class="card mb-5 col-lg-3 carta" key={i}>
                            <div class="row g-0 col-lg-12">
                                <div class="col-md-4">
                                    <img src={personaje.image} class="img-fluid rounded-start mt-5" alt={personaje.image} />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body text-start">
                                        <h5 class="card-title fw-bold">{personaje.name}</h5>
                                        <div>
                                            <p class="card-text fw-bold verde padding">Estado</p>
                                            <p class="card-text padding">{personaje.status}</p>
                                            <p class="card-text fw-bold verde padding">Especie</p>
                                            <p class="card-text padding">{personaje.species}</p>
                                            <p class="card-text fw-bold verde padding">Genero</p>
                                            <p class="card-text padding">{personaje.gender}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}
export default Personajes;
