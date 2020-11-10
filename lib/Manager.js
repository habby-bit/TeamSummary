const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNum) {
      super(name, id, email, );      
      this.officeNum = officeNum 
    }

    getRole() {
      return this.constructor.name;
    }
    
    getOfficeNumber = (data) => {
      return data.officeNum;
    }
}

module.exports = Manager;