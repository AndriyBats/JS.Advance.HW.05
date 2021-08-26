class Worker{
    constructor(firstName, secondName, rate,  days){
        this.name = firstName;
        this.surname = secondName;
        this.rate = rate;
        this.days = days;
    }
    getSalery(){
        let salery = this.rate * this.days;
        console.log(`Зарплата ${this.name} ${this.surname} становить ${salery} гривень.`);
    }
}

let engineer = new Worker('Ivan', 'Ivanov', 850, 22);
engineer.getSalery();

let programmer = new Worker('Petro', 'Petriv', 1500, 25)
programmer.getSalery();