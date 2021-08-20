export default class DataObject {
  constructor(total = '0', next = null, operation = null) {
    this.total = total;
    this.next = next;
    this.operation = operation;
  }
}
