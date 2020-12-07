import { Component } from "../../engine/Component";
import { AppRouter } from "../../utils/AppRouter";

export class App extends Component {

  constructor() {
    super('app', () => {
      const router = AppRouter.getInstance();
      router.init();
      document.getElementById('bt-menu-home')?.addEventListener('click', () => router.routeTo('/'));
      document.getElementById('bt-menu-crud')?.addEventListener('click', () => router.routeTo('/crud'));
      document.getElementById('bt-menu-tech')?.addEventListener('click', () => router.routeTo('/tech'));
    });
  }
}
