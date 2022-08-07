import { LoopHearts } from "./hearts";

export function changePage() {
  document.querySelector("#app")!.innerHTML = `
  <main>
    <h1>Congratulations you and me are a couple</h1>
    <div id="container-hearts">

    </div>
  </main>
  `;

  const hearts = document.querySelector<HTMLElement>("#container-hearts")!;

  LoopHearts(hearts);
}
