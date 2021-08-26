class CoffeeMake{
    on(){
        return `CoffeMake is on.`
    }
    off(){
        return `CoffeMake is off.` 
    }
}

class DropCoffeeMake extends CoffeeMake{
    constructor(autoOff, dropStop, waterLevelIndicator, volume){
        this.autoOff = autoOff;
        this.dropStop = dropStop;
        this.waterLevelIndicator = waterLevelIndicator;
        this.volume = volume;
    }
    aromaTwister(frequency){
        return `Капельна кавоварка перемішує каву із швидкість ${frequency} об/хв.`
    }
    timer(hour){
        return `Кава буде приготовлена о ${hour} годині ранку.`
    }
}

class CarobCoffeeMake extends CoffeeMake{
    constructor(power, typeOfCoffee, pumpPressure, color){
        this.power = power;
        this.typeOfCoffee = typeOfCoffee;
        this.pumpPressure = pumpPressure;
        this.color = color;
    }
    heatingCaps(temperature){
        return `Ріжкова кавоварка має функцію підігріву чашок до температури ${temperature}.`
    }
    guarantee(months){
        return `Ріжкова кавоварка має гарантію ${months} місяців.`
    }
}


class CoffeeMachine extends CoffeeMake{
    constructor(){display, degreeOfGrinding, grainContainer, milkContainer
        this.display = display;
        this.degreeOfGrinding = degreeOfGrinding;
        this.grainContainer = grainContainer;
        this.milkContainer = milkContainer;
    }
    automaticWashing(count){
        return `Кавомашина має функцію автоматичної промивки після кожних ${count} приготувань кави.`
    }
    delayedStart(minute){
        return `Кавомашина має функцію відтермінування старту максимум на${temperature} хвилин.`
    }
}



