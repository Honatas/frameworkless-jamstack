import { Component } from "src/engine/Component";
import { AppRouter } from "src/utils/AppRouter";

export class App extends Component {

  constructor() {
    super('app', async() => {
      const router = AppRouter.getInstance();
      AppRouter.activateMenuButton(window.location.pathname);
      await router.init();
      document.getElementById('bt-menu-home')?.addEventListener('click', () => void router.handleMenuButtonClick('/'));
      document.getElementById('bt-menu-crud')?.addEventListener('click', () => void router.handleMenuButtonClick('/crud'));
      document.getElementById('bt-menu-tech')?.addEventListener('click', () => void router.handleMenuButtonClick('/tech'));
    });
  }
}
