import "./style.css";
//import "counter.ts";
import { setupCounter } from "./counter.ts";

//const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Halloween Havoc";

const halloweenTitle = document.querySelector("#title")!;
halloweenTitle.innerHTML = gameName;
document.querySelector<HTMLDivElement>("#counter")!.innerHTML = `
    <div class="card">
        <h3><button id="btn" type="button"> 0 🎃's 
            <p id="PumpkinLabel">1 🎃/s or click!</p>
        </button>
        </h3>
        <h4>
            <button id="btn2" type="button" disabled> 0 👻's 
                <p id="GhostLabel"> 1 👻 / 10 🎃's</p>
            </button>
            <button id="btn4" type="button" disabled> 0 🐺's 
                <p id="WolfLabel"> 1 🐺 / 1000 🎃's</p>
            </button>
        </h4>
        <h4>
            <button id="btn3" type="button" disabled> 0 🧟's
                <p id="ZombieLabel"> 1 🧟 / 100 🎃's</p>
            </button>
            <button id="btn5" type="button" disabled> 0 🤖's 
                <p id="RobotLabel"> 1 🤖 / 10000 🎃's </p>
            </button>
        </h4>
    </div>
`;
/*
document.querySelector<HTMLDivElement>("#counter")!.innerHTML = `
    <div class="card">
        <h2><button id="btn" type="button"> 0 🎃's </button></h2>
        <p id="PumpkinLabel">1 🎃/s or click!</p>
    </div>
    <div class="card">
        <button id="btn2" type="button" disabled> 0 👻's</button></div>
        <p id="GhostLabel"> 1 👻 / 10 🎃's</p>
    <div class="card">
        <button id="btn3" type="button" disabled> 0 🧟's</button>
        <p id="ZombieLabel"> 1 🧟 / 100 🎃's</p>
    </div>
    <div class="card">
        <button id="btn4" type="button" disabled> 0 🐺's </button>
        <p id="WolfLabel"> 1 🐺 / 1000 🎃's</p>
    </div>
    <div class="card">
        <button id="btn5" type="button" disabled> 0 🤖's </button>
        <p id="RobotLabel"> 1 🤖 / 10000 🎃's </p>
    </div>
`;
*/
setupCounter(document.querySelector<HTMLButtonElement>("#btn")!);
