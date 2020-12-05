// Constructor function class template for creating employee objects
class Customer {
  constructor(name, phone, email, id) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.id = id;
  }
  // method to get name value from object
  getName() {
    return this.name;
  }
  // method to get ID value from object
  getId() {
    return this.id;
  }
  // method to get email value from object
  getEmail() {
    return this.email;
  }
  // method to get phone value from object
  getPhone() {
    return this.phone;
  }
}

// const cust = new Customer("joe", 234234, "joe@test.com", 2);
// console.log(cust);

// exporting functionality to external js files
module.exports = Customer;
