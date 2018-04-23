const CsvDb = require('csv-db');
const csvDb = new CsvDb('./db/db.csv', ['id', 'title']);

module.exports = {
  getAll() {
    return csvDb.get();
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
