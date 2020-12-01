import { App } from "./components/app/App";

const app = new App();
  
window.onload = (): void => {
  app.load(document.getElementById('root'), {world: "Frameworkless JAMStack"});
}
