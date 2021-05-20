import { Component } from "../../engine/Component";
import { CrudService } from "../../service/CrudService";
import { Modal } from "../../utils/Modal";

export class CrudGrid extends Component {

  constructor() {
    super('crud-grid', () => {
      Array.from(document.getElementsByClassName('bt-delete')).forEach(button => {
        button.addEventListener('click', (e) => CrudGrid.onDeleteClick(e));
      });
    });
  }

  private static onDeleteClick(e: Event): void {
    const id = (e.target as HTMLButtonElement).dataset.id as string;
    (document.getElementById('record-id') as HTMLElement).innerHTML = (e.target as HTMLButtonElement).dataset.id as string;
    document.getElementById('bt-close-modal')?.addEventListener('click', () => Modal.close('modal-delete'));
    document.getElementById('bt-cancel-modal')?.addEventListener('click', () => Modal.close('modal-delete'));
    document.getElementById('bt-ok-modal')?.addEventListener('click', () => CrudGrid.delete(parseInt(id)));
    Modal.open('modal-delete');
  }

  private static delete(id: number): void {
    const btOk = document.getElementById('bt-ok-modal') as HTMLButtonElement;
    btOk.disabled = true;

    new CrudService().delete(id)
    .then(() => {
      btOk.disabled = false;
      Modal.close('modal-delete');
    })
    .catch(err => console.log(err));
  }
}
