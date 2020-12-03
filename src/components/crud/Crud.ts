import { Component } from "../../engine/Component";
import { CrudService } from "../../service/CrudService";
import { CrudFilter } from "./CrudFilter";

export class Crud extends Component {

  constructor() {
    super('crud');
  }

  public async load(mountPoint: HTMLElement | null, params?: unknown, onMounted?: () => void): Promise<void> {
    this.mount(mountPoint);
    const options = await new CrudService().getOptions();
    new CrudFilter().mount(document.getElementById('crud-filter'), { options }, onMounted);
    (document.getElementById('crud-loader') as HTMLElement).style.display = 'none';
  }
}