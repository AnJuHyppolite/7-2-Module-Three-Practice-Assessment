import axios from "axios";
import React from "react";

class Pokemon extends React.Component {
  state = { pokemon: {}, input: "", searched: false };

  fetchPokemon = async () => {
    try {
      const { input } = this.state;
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
      // debugger;
      this.setState({ pokemon: res.data });
    } catch (error) {
      this.setState({ pokemon: {} });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ searched: true })
    this.fetchPokemon();
    this.setState({ input: "" });
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input, pokemon, searched } = this.state;

    let pokemonDeets;
    if (searched) {
      if (pokemon.name) {
        pokemonDeets = (
          <div>
            <p>Name: {pokemon.name}</p>
            <img src={pokemon.sprites?.front_default} alt="pokemon" />
            <p>ID {pokemon.id}</p>
          </div>
        );
      } else {
        pokemonDeets = <div>Pokemon not found!</div>
      } 
    } else {
        pokemonDeets = null
    }

    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <h1>Search for a Pokemon</h1>
          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Find Your Pokemon"
          />
          <button type="submit">Submit</button>
        </form>
        {pokemonDeets}
      </section>
    );
  }
}

export default Pokemon;
