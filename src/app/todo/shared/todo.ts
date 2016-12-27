export class Todo {
  constructor(public text: string, public state: boolean) {}

  toggleTask() {
    this.state = !this.state;
  }
}
