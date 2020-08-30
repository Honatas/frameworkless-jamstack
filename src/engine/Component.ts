let Hbs: Record<string, (arg0: unknown) => string>;

class Component {

  /**
   * @param template the name of the template to be used on render
   * @param configure method to apply changes to the DOM after the template has been mounted
   */
  constructor(
    protected template: string,
    protected configure?: (data: unknown) => void,
  ) {}

  /**
   * Overwrite this method to send a request to backend using params, them call mount using the response as data.
   * As a default we just bypass the params as data.
   */
  public load(mountPoint: HTMLElement | null, params?: unknown, onMounted?: () => void): void {
    this.mount(mountPoint, params, onMounted);
  }

  /**
   * Mounts the rendered html inside the mount point.
   */
  public mount(mountPoint: HTMLElement | null, data?: unknown, onMounted?: () => void): void {
    if (mountPoint === null) {
      console.error('Mount point is null');
      return;
    }
    mountPoint.innerHTML = this.render(data);
    if (this.configure) {
      this.configure(data);
    }
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
}
