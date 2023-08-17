import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

const App = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="container">
      <header>
        <div>
          <i className="fa-solid fa-rocket"></i>
          <h1>Ready To Go</h1>
        </div>
      </header>

      <main>
        <div>
          <Button switching={switch1} setSwitch={setSwitch1} />
          <Button switching={switch2} setSwitch={setSwitch2} />
          <Button switching={switch3} setSwitch={setSwitch3} />
        </div>

        <section>
          {switch1 && switch2 && switch3 === true ? (
            <p className="go">Lets'Go</p>
          ) : (
            <p className="no">No way</p>
          )}
        </section>

        <button
          onClick={() => {
            setSwitch1(false);
            setSwitch2(false);
            setSwitch3(false);
          }}
        >
          ⚠ Emergency
        </button>
      </main>

      <footer>
        Made at <a href="https://www.lereacteur.io">Le Reacteur</a> by
        <a href="https://github.com/Gregoire-Paulay"> Grégoire Paulay</a> - 2023
      </footer>
    </div>
  );
};

export default App;
