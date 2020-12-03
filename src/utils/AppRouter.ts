import { Crud } from "../components/crud/Crud";
import { Home } from "../components/home/Home";
import { Router } from "../engine/Router";

export class AppRouter extends Router {

  private static instance: AppRouter;

  private constructor() {
    super({
      context: '/',
      targetElementId: 'router-area',
      routes: {
        '/': () => new Home(),
        '/crud': () => new Crud(),
      },
      afterRouting: (routeName) => {
        AppRouter.activateMenuButton(routeName);
      }
    });
  }

  public static getInstance(): AppRouter {
    if (!AppRouter.instance) {
      AppRouter.instance = new AppRouter();
    }
    return AppRouter.instance;
  }

  private static activateMenuButton(routeName: string): void {
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