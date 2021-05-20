import { Component } from "src/engine/Component";
import { CrudService } from "src/service/CrudService";
import { Modal } from "src/utils/Modal";

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
    document.getElementById('bt-ok-modal')?.addEventListener('click', () => void CrudGrid.delete(parseInt(id)));
    Modal.open('modal-delete');
  }

  private static async delete(id: number): Promise<void> {
    const btOk = document.getElementById('bt-ok-modal') as HTMLButtonElement;
    btOk.disabled = true;
    try {
      await new CrudService().delete(id);
    } catch (err) {
      console.log(err);
    } finally {
      Modal.close('modal-delete');
      btOk.disabled = false;
    }
  }
}
