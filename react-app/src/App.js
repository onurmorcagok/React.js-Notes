import "./App.css";

import Navbar from "./components/Navbar";
import User from "./components/User";

function App() {
  return (
    <div className="container">
      <Navbar title="User App" />
      <hr />
      <User name="Onur MORCAGÖK" age="24" department="Frontend Development" />
      <User name="Samim ŞEN" age="25" department="Backend Development" />
      <User name="Cihan ÖNERYILDIZ" age="22" department="System Administration" />
    </div>
  );
}

export default App;
