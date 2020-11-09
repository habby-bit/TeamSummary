const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, role, id, email, officeNum) {
    
    super();
    this.role = role;
    this.name = name;
    this.id = id;
    this.email = email;
    
    this.officeNum = officeNum 
  }
}

module.exports = Manager;