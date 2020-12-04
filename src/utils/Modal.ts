export class Modal {

  public static open(modalId: string): void {
    const backdrop = document.getElementById('modal-backdrop') as HTMLElement;
    backdrop.style.display = 'block';
    backdrop.onclick = () => Modal.close(modalId);

    const modal = document.getElementById(modalId) as HTMLElement;
    modal.style.display = 'block';
  }

  public static close(modalId: string): void {
    const backdrop = document.getElementById('modal-backdrop') as HTMLElement;
    backdrop.style.display = 'none';
    backdrop.onclick = null;

    const modal = document.getElementById(modalId) as HTMLElement;
    modal.style.display = 'none';
  }
}
