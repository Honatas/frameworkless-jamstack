import { Option } from '../model/Option';

export class CrudService {

  public async getOptions(): Promise<Option[]> {
    try {
      return await this.getOptionsMock();  
    } catch (error) {
      return [];
    }
  }

  public async getSearchResults(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 500);
    });
  }

  private getOptionsMock(): Promise<Option[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { value: 1, label: 'Option 1'},
          { value: 2, label: 'Option 2'},
          { value: 3, label: 'Option 3'},
        ]);
      }, 500);
    });
  }
}
