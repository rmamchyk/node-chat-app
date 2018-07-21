const _ = require('lodash');

class Users {
  constructor() {
    this.users = [];
  }
  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser(id) {
    return _.remove(this.users, (user) => user.id === id)[0];
  }
  getUser(id) {
    return _.find(this.users, (user) => user.id === id);
  }
  getUserList(room) {
    var users = _.filter(this.users, (user) => user.room === room);
    return _.map(users.map((user) => user.name));
  }
}

module.exports = {Users}
