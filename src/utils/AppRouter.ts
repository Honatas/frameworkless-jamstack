import { Crud } from "src/components/crud/Crud";
import { Home } from "src/components/home/Home";
import { Tech } from "src/components/tech/Tech";
import { Router } from "src/engine/Router";

export class AppRouter extends Router {

  private static instance: AppRouter;

  private constructor() {
    super({
      context: '/',
      targetElementId: 'router-area',
      routes: {
        '/': () => new Home(this),
        '/crud': () => new Crud(this),
        '/tech': () => new Tech(this),
      }
    });
  }

  public static getInstance(): AppRouter {
    if (!AppRouter.instance) {
      AppRouter.instance = new AppRouter();
    }
    return AppRouter.instance;
  }

  public async handleMenuButtonClick(routeName: string) {
    AppRouter.activateMenuButton(routeName);
    await this.routeTo(routeName)
  }

  public static activateMenuButton(routeName: string): void {
    Array.from(document.getElementsByClassName('menu-button')).forEach((el) => {
      el.classList.remove('menu-button-active');
    });
    let buttonId = 'bt-menu-' + routeName.substring(1);
    if (buttonId === 'bt-menu-') {
      buttonId += 'home';
    }
    document.getElementById(buttonId)?.classList.add('menu-button-active');
  }
}
