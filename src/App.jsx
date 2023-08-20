import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Emergency from "./components/Emergency";
import Message from "./components/Message";

const App = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="container">
      <Header />

      <main>
        <div>
          <Button switching={switch1} setSwitch={setSwitch1} />
          <Button switching={switch2} setSwitch={setSwitch2} />
          <Button switching={switch3} setSwitch={setSwitch3} />
        </div>

        <Message switch1={switch1} switch2={switch2} switch3={switch3} />

        <Emergency
          setSwitch1={setSwitch1}
          setSwitch2={setSwitch2}
          setSwitch3={setSwitch3}
        />
      </main>

      <Footer />
    </div>
  );
};

export default App;
