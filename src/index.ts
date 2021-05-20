import { App } from "./components/app/App";

window.onload = (): void => {
  void new App().load(document.getElementById('root'));
};
