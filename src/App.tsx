import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Dropdown } from "./ui/atoms/dropdown/Dropdown";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a
          href="https://vitejs.dev"
          target="_blank"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        <Dropdown
          label="Choisir une prestation"
          color="red"
          listChoice={[
            { name: "Coupe homme (cheveux courts)" },
            { name: "Coupe homme (cheveux longs)" },
            {
              name: "Coupe + Balayage + Couleur + Shampoing + Mise en pli (cheveux longs & épais)",
            },
            {
              name: "Coupe + Balayage + Couleur + Shampoing + Mise en pli (cheveux cours & fin)",
            },
            { name: "le cinquième élément !!" },
          ]}
          labelSelect="prestation"
        />
      </p>
    </>
  );
}

export default App;
