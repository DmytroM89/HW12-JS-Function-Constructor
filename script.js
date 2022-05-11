function Hamburger(size) {
    this.burger = size;
    this.getPrice = () => {
        return this.burger.price;
    }
    this.getCalories = () => {
        return this.burger.calories;
    }
    this.addModifier = (modifier) => {
        this.burger.price += modifier.price;
        this.burger.calories += modifier.calories;
    }
}

const SIZE_SMALL = {price: 50, calories: 20};
const SIZE_AVERAGE = {price: 75, calories: 30};
const SIZE_LARGE = {price: 100, calories: 400};

const TOPPING_MAYO = {price: 20, calories: 5};
const POTATO = {price: 15, calories: 10};
const CHEESE = {price: 10, calories: 20};
const SALAD = {price: 20, calories: 5};
const SPICE = {price: 15, calories: 0};

const hamburger = new Hamburger(SIZE_LARGE);

hamburger.addModifier(TOPPING_MAYO);
hamburger.addModifier(SPICE);
hamburger.addModifier(POTATO);
hamburger.addModifier(CHEESE);
hamburger.addModifier(SALAD);

console.log(hamburger.getPrice());
console.log(hamburger.getCalories());
