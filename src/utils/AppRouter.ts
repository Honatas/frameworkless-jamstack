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
    });
  }

  public static getInstance(): AppRouter {
    if (!AppRouter.instance) {
      AppRouter.instance = new AppRouter();
    }
    return AppRouter.instance;
  }
}