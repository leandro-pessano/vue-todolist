var vue = new Vue ({
  el: '#root',
  data: {
    input: '',
    toDoList : [],
    removedToDo : []
  },
  methods: {
    addToDo() {
      if (this.input != '') {
        this.toDoList.push(this.input);
        this.input = '';
      }
    },
    removeToDo(i) {
      this.removedToDo.push(this.toDoList[i]);
      this.toDoList.splice(i,1);
    },
    editToDo(i) {
      this.input = this.toDoList[i];
      this.toDoList.splice(i,1);
      document.getElementById('input-todo').focus();
    },
    removeAll() {
      this.toDoList.forEach((e, i) => {
        this.removedToDo.push(this.toDoList[i]);
      });
      this.toDoList.splice(0);
    },
    restoreToDo(i) {
      this.toDoList.push(this.removedToDo[i]);
      this.removedToDo.splice(i,1);
    },
    deleteToDo(i) {
      this.removedToDo.splice(i,1);
    },
    deleteAll() {
      this.removedToDo.splice(0)
    }
  },
  mounted() {
    document.getElementById('input-todo').focus();
  }
});
