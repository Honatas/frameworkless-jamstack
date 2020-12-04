import { Option } from '../model/Option';
import { Result } from '../model/Result';

export class CrudService {

  public getOptions(): Promise<Option[]> {
    return this.getOptionsMock();  
  }

  public getSearchResults(): Promise<Result[]> {
    return this.getSearchResultsMock();
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

  private getSearchResultsMock(): Promise<Result[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, data1: 'Nice name', data2: 'Nice data', data3: 'Nicer data'},
          { id: 2, data1: 'Good name', data2: 'Good data', data3: 'Better data'},
          { id: 3, data1: 'Awesome name', data2: 'Awesome data', data3: 'Spectacular data'},
        ]);
      }, 500);
    });
  }
}
