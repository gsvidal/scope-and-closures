// With closures nobody can access the saveName variable from the outerscope, only through defined methods
const person = () => {
  let saveName = "Name";
  return {
    getName: function() {
      return saveName;
    },
    //arrow function
    setName: (name) => {
      saveName = name;
    },
  };
};

newPerson = person();
console.log(newPerson.getName());
newPerson.setName("Gonzalo");
console.log(newPerson.getName());


