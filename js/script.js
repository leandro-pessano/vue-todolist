var vue = new Vue ({
  el: '#root',
  data: {
    toDo: '',
    toDoList : []
  },
  methods: {
    addToDo() {
      this.toDoList.push(this.toDo)
    }
  }
});
