import "./style.css";
import { setupCounter } from "./counter.ts";

const app: HTMLDivElement = document.querySelector("#app")!;

document.querySelector<HTMLDivElement>("#counter")!.innerHTML = `
    <div class="card"><button id="btn" type="button"> 0 👻's </button></div>
`;

const gameName = "Demo 1";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

setupCounter(document.querySelector<HTMLButtonElement>("#btn")!);
