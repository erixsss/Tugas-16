import React from "react";
import Counter from "./Component/Counter";
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>COUNTER</h1>
        <Counter item="makan" />
        <Counter item="minum" />
        <Counter item="lari" />
      </div>
    );
  }
}

export default App;
