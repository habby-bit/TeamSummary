const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, role, id, email, github) {
    
    super();
    this.role = role;
    this.name = name;
    this.id = id
    this.email = email
    
    this.github = github 
  }
}

module.exports = Engineer;