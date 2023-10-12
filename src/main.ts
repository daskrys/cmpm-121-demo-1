import "./style.css";
import { setupCounter } from "./counter.ts";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Halloween Havoc";

const halloweenTitle = document.querySelector("#title")!;
halloweenTitle.innerHTML = gameName;

document.querySelector<HTMLDivElement>("#counter")!.innerHTML = `
    <div class="card"><button id="btn" type="button"> 0 🎃's </button></div>
    <div class="card"><button id="btn2" type="button" disabled> 0 👻's</button></div>
    <div class="card"><button id="btn3" type="button" disabled> 0 🧟's</button></div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#btn")!);
