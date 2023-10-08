export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;

  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `👻 Count: ${counter}`;
  };
  setInterval(() => setCounter(counter + 1), 1000);
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
