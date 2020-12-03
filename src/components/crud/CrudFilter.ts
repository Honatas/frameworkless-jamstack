import { Component } from "../../engine/Component";
import { CrudService } from "../../service/CrudService";

export class CrudFilter extends Component {

  constructor() {
    super('crud-filter', () => {
      document.getElementById('bt-search')?.addEventListener('click', () => CrudFilter.onSearchClick());
    });
  }

  private static async onSearchClick(): Promise<void> {
    (document.getElementById('bt-search') as HTMLButtonElement).disabled = true;
    (document.getElementById('crud-loader') as HTMLElement).style.display = 'block';

    const results = await new CrudService().getSearchResults();

    (document.getElementById('bt-search') as HTMLButtonElement).disabled = false;
    (document.getElementById('crud-loader') as HTMLElement).style.display = 'none';
  }
}
