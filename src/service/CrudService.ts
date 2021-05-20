import { Option } from '../model/Option';
import { Result } from '../model/Result';
import { StorageUtil } from '../utils/StorageUtil';

export class CrudService {

  public getOptions(): Promise<Option[]> {
    return this.getOptionsMock();
  }

  public getSearchResults(): Promise<Result[]> {
    return this.getSearchResultsMock();
  }

  public delete(id: number): Promise<void> {
    return new Promise((resolve) => {
      console.log(`Record with id ${id} has been deleted. Trust me.`);
      setTimeout(() => resolve(), StorageUtil.getSimDelay());
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
      }, StorageUtil.getSimDelay());
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
      }, StorageUtil.getSimDelay());
    });
  }
}
