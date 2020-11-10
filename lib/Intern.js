const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
      super(name, id, email);      
      this.school = school
    }

    getRole() {
      return this.constructor.name;
    }
    
    getSchool = (data) => {
      return data.school;
    }
}

module.exports = Intern;