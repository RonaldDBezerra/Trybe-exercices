import React from "react";
import { Component } from "react";
import pokemons from "./data";

class CreatPokemon extends Component {
    render () {
        return (
            pokemons.map(({id, name, type, averageWeight, image, }) => (
                <div className='div-content'>
                    <article className='card-pokemon'>
                        <p>{name}</p>
                        <p>{type}</p>
                        <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                    </article>
                        <img src={image} alt='imagem pokemon'></img>
                </div>
            ))
        )
    }
}

export default CreatPokemon