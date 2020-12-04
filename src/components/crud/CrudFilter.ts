import { Component } from "../../engine/Component";
import { CrudService } from "../../service/CrudService";
import { CrudGrid } from "./CrudGrid";

export class CrudFilter extends Component {

  constructor() {
    super('crud-filter', () => {
      document.getElementById('bt-search')?.addEventListener('click', () => CrudFilter.onSearchClick());
    });
  }

  private static onSearchClick(): void {
    (document.getElementById('crud-grid') as HTMLElement).innerHTML = '';
    (document.getElementById('bt-search') as HTMLButtonElement).disabled = true;
    (document.getElementById('crud-loader') as HTMLElement).style.display = '';

    new CrudService().getSearchResults()
      .then(results => {
        new CrudGrid().mount(document.getElementById('crud-grid'), { results });
        (document.getElementById('bt-search') as HTMLButtonElement).disabled = false;
        (document.getElementById('crud-loader') as HTMLElement).style.display = 'none';
      })
      .catch(err => console.log(err));
  }
}
