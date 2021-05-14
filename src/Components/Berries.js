import axios from "axios";
import React from "react";

class Berries extends React.Component {
  state = { berryArray: [], selectedBerryURL: "", selectedBerry: {}, berryFlavors: [] };

  fetchBerries = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/berry/");
      // debugger
      this.setState({ berryArray: res.data.results });
    } catch (error) {
      this.setState({ berryArray: [] });
    }
  };

  componentDidMount() {
    this.fetchBerries();
  }

  selectBerry = async (e) => {
    this.setState({ selectedBerryURL: e.target.value });
    try {
      const res = await axios.get(e.target.value);
      this.setState({ selectedBerry: res.data, berryFlavors: res.data.flavors  });
    } catch (error) {
      this.setState({ selectedBerry: {}, berryFlavors: [] });
    }
  };

  render() {
    const { berryArray, selectedBerryURL, selectedBerry, berryFlavors } = this.state;
    return (
      <div>
        <h1>Select a Type</h1>
        <select value={selectedBerryURL} onChange={this.selectBerry}>
          <option value="" defaultValue></option>
          {berryArray.map((berryObj) => {
            return (
              <option value={berryObj.url} key={berryObj.name}>
                {berryObj.name}
              </option>
            );
          })}
        </select>
        <h1>{selectedBerry.name}</h1>
        <p>{selectedBerry.firmness && selectedBerry.firmness.name}</p>
        <ul>
          {berryFlavors.map((berryFlavor) => {
            return <li key={berryFlavor.flavor.url}>{berryFlavor.flavor.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Berries;
