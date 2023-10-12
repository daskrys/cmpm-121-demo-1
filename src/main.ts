import "./style.css";
import { setupCounter } from "./counter.ts";

const app: HTMLDivElement = document.querySelector("#app")!;

document.querySelector<HTMLDivElement>("#counter")!.innerHTML = `
    <div class="card"><button id="btn" type="button"> 0 👻's </button></div>
    <div class="card"><button id="btn2" type="button" disabled> 0 🎃's</button></div>
`;

const gameName = "Halloween Havoc";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

setupCounter(document.querySelector<HTMLButtonElement>("#btn")!);
