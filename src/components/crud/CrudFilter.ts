import { Component } from "src/engine/Component";
import { CrudService } from "src/service/CrudService";
import { CrudGrid } from "./CrudGrid";

export class CrudFilter extends Component {

  constructor() {
    super('crud-filter', () => {
      document.getElementById('bt-search')?.addEventListener('click', () => void CrudFilter.onSearchClick());
      document.getElementById('filter-options')?.addEventListener('change', () => CrudFilter.clearGrid());
      document.getElementById('filter-input')?.addEventListener('change', () => CrudFilter.clearGrid());
    });
  }

  private static async onSearchClick(): Promise<void> {
    CrudFilter.clearGrid();
    (document.getElementById('bt-search') as HTMLButtonElement).disabled = true;
    (document.getElementById('crud-loader') as HTMLElement).style.display = '';

    try {
      const results = await new CrudService().getSearchResults();
      new CrudGrid().mount(document.getElementById('crud-grid'), { results });
    } catch (err) {
      console.error(err);
    } finally {
      (document.getElementById('bt-search') as HTMLButtonElement).disabled = false;
      (document.getElementById('crud-loader') as HTMLElement).style.display = 'none';
    }
  }

  private static clearGrid(): void {
    (document.getElementById('crud-grid') as HTMLElement).innerHTML = '';
  }
}
