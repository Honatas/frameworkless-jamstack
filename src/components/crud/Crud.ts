import { Component } from "../../engine/Component";
import { CrudService } from "../../service/CrudService";

export class Crud extends Component {

  constructor() {
    super('crud');
  }

  public async load(mountPoint: HTMLElement | null, params?: unknown, onMounted?: () => void): Promise<void> {
    const options = await new CrudService().getOptions();
    this.mount(mountPoint, { options }, onMounted);
  }
}