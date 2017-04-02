let person=new Object({
  fname: 'Uday',
  sname: 'Kiran',
  getFName: function(){
    return this.fname;
  }
});

Object.defineProperty(person,'getSName',{
  value: function(){
    return this.sname;
  },
  writable: false,
  enumerable: true,
  configurable: true
});
/*Object.defineProperty(person,'getSName',{
  value: function(){
    return this.sname.toUpperCase();
  },
  writable: false,
  enumerable: true,
  configurable: true
});*/
let personInherited=Object.create(person);

/*personInherited.getSName=function(){
  return this.sname.toUpper();
}*/

/*Object.defineProperty(personInherited,'getSName',{
  value: function(){
    return this.sname.toUpperCase();
  },
  writable: true,
  enumerable: true,
  configurable: true
});*/

/*personInherited.getSName=function(){
  return this.sname;
}*/
personInherited.fname='Udy';
console.log(personInherited.getFName());
console.log(person.getFName());
console.log(personInherited.getSName());
