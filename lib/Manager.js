const Employee = require('./Employee');

class Manager extends Employee {
  constructor(id, email, officeNum) {
    super(id, email);
    this.id = id;
    this.email = email;
    
    this.officeNum = officeNum 
  }
}

module.exports = Manager;