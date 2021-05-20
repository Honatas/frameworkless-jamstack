import { Component } from "src/engine/Component";
import { AppRouter } from "src/utils/AppRouter";

export class App extends Component {

  constructor() {
    super('app', async() => {
      const router = AppRouter.getInstance();
      await router.init();
      document.getElementById('bt-menu-home')?.addEventListener('click', () => void router.routeTo('/'));
      document.getElementById('bt-menu-crud')?.addEventListener('click', () => void router.routeTo('/crud'));
      document.getElementById('bt-menu-tech')?.addEventListener('click', () => void router.routeTo('/tech'));
    });
  }
}
