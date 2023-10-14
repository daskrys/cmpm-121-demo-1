import "./style.css";
//import "counter.ts";
import { setupCounter } from "./counter.ts";

//const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Halloween Havoc";

const halloweenTitle = document.querySelector("#title")!;
halloweenTitle.innerHTML = gameName;
document.querySelector<HTMLDivElement>("#counter")!.innerHTML = `
    <div class="card">
        <h3><button id="btn" type="button"> 0 🎃s 
        </button><p id="PumpkinLabel">Click the 🎃 to start!</p>
        </h3>
        <h4>
            <button id="btn2" type="button" disabled> 0 👻s </button>
            <p id="GhostLabel"> 10 🎃s</p>
            <button id="btn4" type="button" disabled> 0 🐺s </button>
            <p id="WolfLabel"> 1000 🎃s</p>
        </h4>
        <h4>
            <button id="btn3" type="button" disabled> 0 🧟s</button>
            <p id="ZombieLabel"> 100 🎃s</p>
            <button id="btn5" type="button" disabled> 0 🤖s </button>
            <p id="RobotLabel"> 10000 🎃s </p>
        </h4>
    </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#btn")!);
