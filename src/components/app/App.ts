import { Component } from "../../engine/Component";
import { AppRouter } from "../../utils/AppRouter";

export class App extends Component {

  constructor() {
    super('app', () => {
      const router = AppRouter.getInstance();
      router.init();

      document.getElementById('bt-menu-home')?.addEventListener('click', (e) => {
        App.toggleMenuButtonActive(e);
        router.routeTo('/');
      });
      
      document.getElementById('bt-menu-crud')?.addEventListener('click', (e) => {
        App.toggleMenuButtonActive(e);
        router.routeTo('/crud');
      });
    });
  }

  private static toggleMenuButtonActive(e: Event): void {
    Array.from(document.getElementsByClassName('menu-button')).forEach((el) => {
      el.classList.remove('menu-button-active');
    });
    (e.target as HTMLElement).classList.add('menu-button-active');
  }
}
