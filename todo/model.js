let data = [
  { id: 1, title: 'sleep' },
  { id: 2, title: 'eat' },
  { id: 3, title: 'code' },
  { id: 4, title: 'repeat' },
];

module.exports = {
  getAll() {
    return data;
  },
  delete(id) {
    data = data.filter(item => item.id !== id);
  },

  getNextId() {
    return (
      data.reduce((prev, todo) => {
        if (prev > todo.id) {
          return prev;
        }
        return todo.id;
      }, 0) + 1
    );
  },

  save(newItem) {
    const nextId = this.getNextId();
    data.push({ ...newItem, id: nextId });
  },
};
