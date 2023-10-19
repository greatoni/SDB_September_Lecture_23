/* 
    Array
        - Denoted with the square brackets []
        - Indices starts at zero,
*/

let list = ['milk','bread','chicken','coffee'];
//            0       1        2        3

console.log(list[2]);
console.log(list.length);

list[0] = 'glassa milk?'
console.log(list[0]);

let grabBag = [
    'Clarke', 5, false, 'Hamil', 'Weiss', [
        'fear and hunger', "Levi", 5]
    ]

console.log(typeof grabBag)
console.log(grabBag instanceof Array);

console.log(grabBag[4])
console.log(grabBag[5][2]);
console.log(`Hello, ${grabBag[4]}! Hello, ${grabBag[5][1]}!`);

// ! Array Methods!
//  .push(Add item to end)

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

food.push('Poke Bowl'); // does need some arguement to push or add to an array! Appnends to the end of the array!
console.log('PUSH: ', food);

// .splice(position, how many, with what?)
food.splice(1,1,'Sushi Roll');
console.log("SPLICE: ", food);

food.splice(1,0,'Steak');
console.log("SPLICE: ", food);

//  .pop(); Take off last item!
food.pop();
console.log('POP: ', food);

// .shift() Removes first item in the array.
food.shift();
console.log('SHIFT: ', food);

// .unshift(add item, [optional extra items])
food.unshift('Hamburger', 'Salad')
cconsole.log('UNSHIFT: ', food);

// .toString(); Writes a piece of data as a string even if it wouldn't normally be.
let rgb = ['red','green','blue']
console.log(rgb.toString());