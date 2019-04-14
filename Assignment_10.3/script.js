class Dog{
    constructor(name) {
        this.name = name;
      }
    speak(){
      return this.name;
   }
}
let obj = new Dog("woof");
console.log(obj.speak());


class Labrador extends Dog{  //Class inheritance
     constructor(name){
         super(name);
     }
     speak(){  //OVERRIDE speak() function
         return "Labrador speaks "+ super.speak();
     }
}

let objL = new Labrador("WOOF");
console.log(objL.speak());
