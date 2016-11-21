export class Todo {
  // Number or string acceptable
  id: number | string;
  createdAt: any;
  title: string = '';
  complete: boolean = false;

  // Assign values from JS Object
  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
}