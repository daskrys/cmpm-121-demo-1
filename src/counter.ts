export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  let pumpkinCounter = 0;
  let pumpkinButton = document.querySelector<HTMLButtonElement>("#btn2")!;

  function animate() {
    //counter++;
    if (counter > 500) {
      counter = 0;
    }

    if (counter >= 10) {
      pumpkinButton.disabled = false;
    } else {
      pumpkinButton.disabled = true;
    }

    element.innerHTML = `👻 Count: ${counter}`;
    requestAnimationFrame(animate);
  }

  element.addEventListener("click", () => {
    counter++;
    window.requestAnimationFrame(animate);
  });

  pumpkinButton.addEventListener("click", () => {
    counter -= 10;
    pumpkinCounter++;
    pumpkinButton.innerHTML = `${pumpkinCounter} 🎃's`;
  });
}
