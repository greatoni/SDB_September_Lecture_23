// ! Classes
/* 
- Introduced in 2015
- a funciton that helps us create objects,
- defines a category

    class NameOfClass {
        constructor(parameter) {
            this.key = parameter
        }

        methodName() {
            code block here!
        }
    }
*/

class NewObject {
    constructor() {
        this.name;
        this.desc;
    }
}

let one = new NewObject();
console.log(one);


class Item {
    //The constructor's parameters help define initial data when constructed.
    constructor(name, desc, price) {
        this.name = name; 
        this.description = desc;
        this.price = price;
    }
//Methods are functions that this class has exclusive use of, perfect for modifying or returning data that exists within the class.
    eat()
    {
        console.log("That was really yummy!")
    }

    raisePrice(factor)
    {
        this.price += factor;
    }
}

let apple = new Item("Apple", "A yummy red fruit", 0.99)
apple.eat();
apple.raisePrice(1);
console.log(apple.price);

// ! Factory Functions

let iType = 'tomato soup';
let iDesc = 'canned'
let iCost = 0.99;

function proccessItem(i, d, c) {
    return new Item(i,d,c);
}

let useFunctoin = processItem(iType, iDesc, iCost);
console.log(useFunction)

class deptInventory {
    constructor(dept) {
        this.department = dept;
        this.items = [];
    }

    addItem(newItem) {
        this.items.push(newItem);
        console.log("ITEM ADDED!!!")
    }
}

let drygoods = new deptInventory("Dry Goods")
let corn = new Item("corn", "A yummy yellow log of seeds.", 0.99)
drygoods.addItem(corn);
console.log(drygoods);


class Expense {
    static addupchargeforprofit(wholesale)
    {
        let upcharge = wholesale + (wholesale * .25);
        return new Expense(wholesale, upcharge);
    }

    constructor(w,s) {
        this.purchased_Price = w;
        this.sell_at = s;
        this.salesTax
    }

    addTax(x) {
        let percentage = x;
        let saleCost = this.sell_at;

        this.salesTax = (saleCost + (saleCost * percentage)).toFixed(2);
    }

}

let itemtosell = Expense.addupchargeforprofit(1);
itemtosell.addTax(0.07)
console.log(itemToSell);

let anotherItem = Expense.addupchargeforprofit(5)
anotherItem.addTax(0.06)
console.log(anotherItem);