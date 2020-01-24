/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
*/

var Person = function(firstAndLast) {
  this.getFirstName = () => {
    let first = firstAndLast.split(" ")[0];

    return first;
  }
  this.getLastName = () => {
    let last = firstAndLast.split(" ")[1];

    return last;
  }
  this.getFullName = () => {
    return firstAndLast;
  };
  this.setFirstName = (name) => {
    firstAndLast = firstAndLast.replace(this.getFirstName(), name);
  };
  this.setLastName = (name) => {
    firstAndLast = firstAndLast.replace(this.getLastName(), name);
  };
  this.setFullName = (name) => {
    firstAndLast = name;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
