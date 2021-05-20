import { App } from "./components/app/App";

window.onload = (): void => {
  new App().load(document.getElementById('root'));
};
