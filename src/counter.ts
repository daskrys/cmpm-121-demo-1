interface Monster {
  name: string;
  cost: number;
  count: number;
  rate: number;
  description: string;
}

const Halloween: Monster[] = [
  {
    name: "👻",
    cost: 10,
    count: 0,
    rate: 0.1,
    description: "Boo",
  },
  {
    name: "🧟",
    cost: 100,
    count: 0,
    rate: 2,
    description: "Count Zombula",
  },
  {
    name: "🐺",
    cost: 1000,
    count: 0,
    rate: 50,
    description: "Dire Wolfenstein",
  },
  {
    name: "🤖",
    cost: 10000,
    count: 0,
    rate: 100,
    description: "Artificial Hyperintelligence",
  },
];

export function setupCounter(pumpkinButton: HTMLButtonElement) {
  const buttons: HTMLButtonElement[] = [
    document.querySelector<HTMLButtonElement>("#btn2")!,
    document.querySelector<HTMLButtonElement>("#btn3")!,
    document.querySelector<HTMLButtonElement>("#btn4")!,
    document.querySelector<HTMLButtonElement>("#btn5")!,
  ];

  const labels: HTMLParagraphElement[] = [
    document.querySelector<HTMLParagraphElement>("#GhostLabel")!,
    document.querySelector<HTMLParagraphElement>("#ZombieLabel")!,
    document.querySelector<HTMLParagraphElement>("#WolfLabel")!,
    document.querySelector<HTMLParagraphElement>("#RobotLabel")!,
  ];

  let counter: number = 0;
  let pumpkinCounter: number = 0;
  let pumpkinRate: number = 0;
  const HalloweenLength: number = Halloween.length;
  let firstClick: boolean = false; // flag to check if animation is running
  const pumpkinLabel =
    document.querySelector<HTMLParagraphElement>("#PumpkinLabel")!;
  let lastTime: number = 0;

  function animate() {
    const newTime: number = performance.now();
    const delta: number = newTime - lastTime;
    lastTime = newTime;
    const fps: number = 1000 / delta;
    counter += (1 / fps) * pumpkinRate;
    pumpkin();
    requestAnimationFrame(animate);
  }

  function pumpkin() {
    pumpkinCounter = counter;
    pumpkinButton.innerHTML = `${pumpkinCounter.toFixed(2)} 🎃s`;
    pumpkinLabel.innerHTML = `${pumpkinRate.toFixed(2)} 🎃/s`;
    console.log(pumpkinCounter);

    for (let i = 0; i < HalloweenLength; i++) {
      if (counter >= Halloween[i].cost) {
        buttons[i].disabled = false;
      } else {
        buttons[i].disabled = true;
      }
    }
  }

  pumpkinButton.addEventListener("click", () => {
    if (!firstClick) {
      firstClick = true;
      lastTime = performance.now();
      counter++;
      window.requestAnimationFrame(animate);
    } else {
      counter++;
    }
  });

  for (let i = 0; i < HalloweenLength; i++) {
    buttons[i].addEventListener("click", () => {
      counter -= Halloween[i].cost;
      Halloween[i].cost *= 1.15;
      Halloween[i].count++;
      if(Halloween[i].count === 1) {
        buttons[i].innerHTML = `${Halloween[i].count} ${Halloween[i].description} ${Halloween[i].name}`;
      } else {
        buttons[i].innerHTML = `${Halloween[i].count} ${Halloween[i].description}s ${Halloween[i].name}`;
      }

      labels[i].innerHTML = `${Halloween[i].cost.toFixed(2)} 🎃s`;
      pumpkinRate += Halloween[i].rate;
      pumpkin();
    });
  }
}
