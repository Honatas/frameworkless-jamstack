export class StorageUtil {

  public static getSimDelay(): number {
    let simDelay = window.localStorage.getItem('simDelay');
    if (!simDelay) {
      simDelay = "500";
      window.localStorage.setItem('simDelay', simDelay);
    }
    return parseInt(simDelay);
  }

  public static setSimDelay(simDelay: number): void {
    window.localStorage.setItem('simDelay', `${simDelay}`);
  }
}
