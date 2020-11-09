const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(id, email, github) {
    
    super(id, email);
    this.id = id
    this.email = email
    
    this.github = github 
  }
}

module.exports = Engineer;