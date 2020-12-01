import { Component } from "./Component";

interface Routes {
  [name: string]: () => Component;
}

interface RouterOptions {
  context: string,
  targetElementId: string,
  routes: Routes,
  beforeRouting?: () => boolean,// = ():boolean => true,
  afterRouting?: (routeName: string) => void,
}

export class Router {

  private currentRoute = '/';

  constructor(private options: RouterOptions) {
    if (!this.options.routes['/']) {
      console.error(this.logPrefix() + 'Default route "/" has not been defined, this router will not work properly');
      return;
    }

    window.onpopstate = (): void => {
      window.location = document.location;
    };

    this.currentRoute = this.findRoute(window.location.pathname);
  }

  public init(): void {
    this.loadRoute(this.currentRoute);
  }

  private loadRoute(routeName: string, params?: unknown, onMounted?: () => void): void {
    if (this.options.beforeRouting && !this.options.beforeRouting()) {
      return;
    }

    const route = this.options.routes[this.findRoute(routeName)];
    if (!route) {
      console.error(this.logPrefix() + 'Route ' + routeName + ' not registered');
      this.routeTo('/');
      return;
    }
    route().load(document.getElementById(this.options.targetElementId), params, onMounted);

    if (this.options.afterRouting) {
      this.options.afterRouting(route.name);
    }
  }

  public routeTo(routeName: string, params?: unknown, onMounted?: () => void): void {
    this.currentRoute = routeName;
    this.changeHistory(routeName);
    this.loadRoute(routeName, params, onMounted);
  }

  private findRoute(path: string): string {
    const urlPath = path.split('/');
    let route = '';
    for (const char of urlPath) {
      if (char) {
        route += '/' + char;
      }
      if (route === this.options.context) {
        route = '';
      }
      if (route.length > 1) {
        break;
      }
    }
    if (route === '') {
      route = '/';
    }
    return route;
  }

  private changeHistory(routeName: string): void {
    const ctx = (this.options.context === '/' ? '' : this.options.context);
    window.history.pushState(null, '', ctx + routeName);
  }

  private logPrefix(): string {
    return '[Router on ' + this.options.context + ']: ';
  }
}
