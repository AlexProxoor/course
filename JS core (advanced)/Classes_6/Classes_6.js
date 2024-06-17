// Создайте класс под названием «Человек» со
// свойствами имени, возраста и страны.
// Включите метод для отображения сведений о
// человеке. Создайте два экземпляра класса
// «Человек» и отобразите их сведения


class People {

    constructor(name, age, country) {
        this.name = name,
            this.age = age,
            this.country = country
    }

    information() {
        return `name - ${this.name}, age - ${this.age}, country -${this.country}`
    }
}

const people1 = new People('Alex', 20, 'Belarus')
const people2 = new People('Katerin', 30, 'Belarus')
console.log(people1.information())
console.log(people2.information())