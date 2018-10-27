import React, { Component } from "react";

class App extends Component {
  state = { value: 0 };

  tambah() {
    this.setState({
      value: this.state.value + 1
    });
    this.log();
  }

  kurang() {
    this.setState({
      value: this.state.value - 1
    });
    this.log();
  }

  reset() {
    this.setState({
      value: 0
    });
  }

  log() {
    console.clear();
    console.log("tombol ditekan = " + this.state.value);
  }

  render() {
    console.log("setelah render = " + this.state.value);
    return (
      <div>
        <h1>COUNTER</h1>
        <h2>{this.state.value}</h2>
        <button onClick={() => this.tambah()}>Tambah</button>
        <button onClick={() => this.kurang()}>Kurang</button>
        <br />
        <button onClick={() => this.reset()}>reset</button>
      </div>
    );
  }
}

export default App;
