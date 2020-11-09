const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, role, id, email, school) {
    
    super();
    this.role = role;
    this.name = name;
    this.id = id;
    this.email = email;
    
    this.school = school 
  }
}

module.exports = Intern;