let Hbs: any;

class Component {

  /**
   * @param template the name of the template to be used on render
   */
  constructor(
    protected template?: string,
  ) {}

  /**
   * Overwrite this method to send a request to backend using params, them call mount using the response as data.
   * As a default we just bypass the params as data.
   */
  public load(mountPoint: HTMLElement, params?: any, onMounted?: () => void) {
    this.mount(mountPoint, params, onMounted);
  }

  /**
   * Mounts the rendered html inside the mount point.
   */
  public mount(mountPoint: HTMLElement, data?: unknown, onMounted?: () => void) {
    mountPoint.innerHTML = this.render(data);
    this.configure(data);
    if (onMounted) {
      onMounted();
    }
  }

  /**
   * Renders the template as a string.
   */
  public render(data: unknown = {}): string {
    if (!this.template) {
      return '';
    }

    const hbs = Hbs[this.template];
    if (!hbs) {
      console.error('Template ' + this.template + ' not found.');
      return '';
    }

    return hbs(data);
  }

  /**
   * Apply changes to the DOM after the template has been mounted
   */
  public configure(data?: unknown) {}
}
