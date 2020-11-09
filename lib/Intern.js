const Employee = require('./Employee');

class Intern extends Employee {
  constructor(id, email, school) {
      super(id, email);
    this.id = id;
    this.email = email;
    
    this.school = school 
  }
}

module.exports = Intern;