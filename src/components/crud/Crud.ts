import { Component } from "../../engine/Component";
import { CrudService } from "../../service/CrudService";
import { StorageUtil } from "../../utils/StorageUtil";
import { CrudFilter } from "./CrudFilter";

export class Crud extends Component {

  constructor() {
    super('crud', () => {
      document.getElementById('sim-delay')?.addEventListener('change', (e) => window.localStorage.setItem('simDelay', (e.target as HTMLInputElement).value));
    });
  }

  public async load(mountPoint: HTMLElement | null, params?: unknown, onMounted?: () => void): Promise<void> {
    this.mount(mountPoint, { simDelay: StorageUtil.getSimDelay() });
    
    const options = await new CrudService().getOptions();
    new CrudFilter().mount(document.getElementById('crud-filter'), { options }, onMounted);
    
    (document.getElementById('crud-loader') as HTMLElement).style.display = 'none';
  }
}