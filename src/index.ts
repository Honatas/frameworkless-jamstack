import { App } from "./components/app/App";

window.onload = (): void => {
  const app = new App();
  app.load(document.getElementById('root'), {world: "Frameworkless JAMStack"});
}
