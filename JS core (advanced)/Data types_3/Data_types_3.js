// Напишите функцию для сравнения двух
// объектов, чтобы определить, содержит ли
// первый из них эквивалентные значения
// свойств по сравнению со вторым.

function Data_types(obj1, obj2) {
   
    let keys_obj1 = Object.keys(obj1);
    let keys_obj2= Object.keys(obj2);

    if (keys_obj1.length !== keys_obj2.length) {
        return false;
    }
  
    for (let key of keys_obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}


let object1 = {
    age: 25,
    name: "Pop"
};

let object2 = {
    age: 25,
    name: "Pop"
};

let object3 = {
    age: 25,
    name: "Bob"
};

console.log(Data_types(object1, object2)); // frue
console.log(Data_types(object1, object3)); // false
console.log(Data_types(object2, object3)); // false
