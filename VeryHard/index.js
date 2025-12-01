class Person {
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }
  exercise() {
    console.log("Running is fun! - said no one ever");
  }
  fetchJob() {
    console.log(`${this.name} is a ${this.job}`);
  }
}
class Programmer extends Person {
  constructor(name, job, age, languages = []) {
    super(name, job, age);
    this.languages = languages;
    this.busy = true;
  }
  completeTask() {
    this.busy = false;
  }
  acceptNewTask() {
    this.busy = true;
  }
  offerNewTask() {
    if (this.busy) {
      console.log(`${this.name} can't accept any new tasks right now.`);
    } else {
      console.log(`${this.name} would love to take on a new responsibility.`);
    }
  }
  learnLanguage(lang) {
    this.languages.push(lang);
  }
  listLanguages() {
    return this.languages;
  }
}
let person1 = new Person("Harold", "Backend Engineer", 20);

let a1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
let a2 = new Programmer("Edwin", "Janitor", 55, ["HTML", "SASS", "Ruby"]);
let a3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);

a1.learnLanguage("CSS");
a2.learnLanguage("C++");
a3.learnLanguage("JAVA");

console.log(a1.listLanguages());
console.log(a2.listLanguages());
console.log(a3.listLanguages());

console.log(person1);
console.log(a1);
console.log(a2);
console.log(a3);

person1.exercise();
person1.fetchJob();

a1.offerNewTask();
a1.completeTask();
a1.offerNewTask();
