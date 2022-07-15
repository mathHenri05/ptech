import { useEffect, useState } from 'react'
import pokemonServices from '../../services/PokemonService';
import './styles.css'
export const Home = () => {

    const [pokemon, setPokemons] = useState<any[]>([]);
    useEffect(() => {
        pokemonServices.getPokemons().then((data) => setPokemons(data))
    }, [])

    return(
        <>
        <h1>Pokémon Unite - Pokédex</h1>
        <h2>Confira a lista completa de Pokémons do jogo Pokemón Unite e suas habilidades, evoluções e muito mais!</h2>
         <div className="search__container">
           <input className="search__field" placeholder="Pesquisar Pokémon"/>
           <button className="search__button">Buscar</button>
           <button className="search__button--mobile">
             <img src='/assets/images/search.svg' />
           </button>
         </div>
         <div className="card__container">
           {
            pokemon.map((item) => {
                return(
                    <a className="card" style={{ background: item.color }} href={`/${item.id}`}>
                    <img className="card__image" src={`/assets/images/stat/stat-${item.avatar}.png`} />
                    <div className="card__title">${item.name}</div>
                </a>
                )
            })
            }
         </div>
         </>
    )
}