import axios from "axios";
import React from "react";

class Locations extends React.Component {
  state = { locations: [], showLocations: false };

  fetchLocations = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/location");
      this.setState({ locations: res.data.results });
      //   debugger;
    } catch (error) {
      this.setState({ locations: [] });
    }
  };

  componentDidMount() {
    this.fetchLocations();
  }

  handleClick = () => {
    this.setState((prevState) => {
      return { showLocations: !prevState.showLocations };
    });
  };

  render() {
    const { locations, showLocations } = this.state;
    return (
      <div>
        <h1>List of Locations</h1>
        <button onClick={this.handleClick}>
          {showLocations ? "Hide Locations" : "Show Locations"}
        </button>
        {showLocations ? (
          <ul>
            {locations.map((location) => {
              return <li key={location.name}>{location.name}</li>;
            })}
          </ul>
        ) : (
          <ul></ul>
        )}
      </div>
    );
  }
}

export default Locations;
