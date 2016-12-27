export class Todo {
  constructor(public text: string, public state: boolean = false) {}

  toggleTask() {
    this.state = !this.state;
  }
}
