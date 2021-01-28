var vue = new Vue ({
  el: '#root',
  data: {
    input: '',
    toDoList : [],
    removedToDo : []
  },
  methods: {
    addToDo() {
      this.toDoList.push(this.input);
      this.input = '';
    },
    removeToDo(i) {
      this.removedToDo.push(this.toDoList[i]);
      this.toDoList.splice(i,1);
    }
  }
});
