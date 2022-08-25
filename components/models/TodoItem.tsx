/*
resturcture models in better place
*/
class TodoItem {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.id = new Date().toISOString();
    this.text = todoText;
  }
}

export default TodoItem;
