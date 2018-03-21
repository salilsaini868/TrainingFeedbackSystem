export interface Result {
  Operation: number;
  Status: number;
  Message: string;
  // tslint:disable-next-line:no-any
  body: any;
}