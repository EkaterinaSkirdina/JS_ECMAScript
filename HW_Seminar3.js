console.log('Задание 1: ""Управление персоналом компании""');
// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
// // Пример использования классов
// const employee = new Employee(""John Smith"");
// employee.displayInfo();
// // Вывод:
// // Name: John Smith
// const manager = new Manager(""Jane Doe"", ""Sales"");
// manager.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Department: Sales

class Employee {
    constructor(name) {
        this.name = name;
    };
    displayInfo() {
        console.log(`"${this.name}"`);
    };    
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    displayInfo() {
        console.log(`"${this.name}", "${this.department}"`);
    }
}

const employee = new Employee("John Smith");
employee.displayInfo();
const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();


console.log('Задание 1: "Управление списком заказов"');

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// // Пример использования класса
// class Product {
// constructor(name, price) {
// this.name = name;
// this.price = price;
// }
// }
// const order = new Order(12345);
// const product1 = new Product(""Phone"", 500);
// order.addProduct(product1);
// const product2 = new Product(""Headphones"", 100);
// order.addProduct(product2);
// console.log(order.getTotalPrice()); // Вывод: 600

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Order {
    orderNumber = this.orderNumber;
    products = [];
    addProduct(Product) {
        this.products.push(Product);
    }
    getTotalPrice() {
        return this.products.reduce((total, current) => total + current.price, 0);
    }
}
const order = new Order(12345);
const product1 = new Product("Phone", 500);
order.addProduct(product1);
const product2 = new Product("Headphones", 100);
order.addProduct(product2);
console.log(order.products);
console.log(order.getTotalPrice());


console.log('Необязательное задание 1');

// Создать класс "Товар" с приватными полями "название", "цена" и "количество". Класс должен иметь публичные методы "изменить цену", "изменить количество" и "получить стоимость", которые будут изменять соответствующие поля объекта и возвращать стоимость товара соответственно. Также класс должен иметь статическое поле "максимальное количество", которое будет задавать максимально допустимое количество товара для всех создаваемых объектов.

// Пример работы кода:

// const product1 = new Product('Тетрадь', 50, 200);
// console.log(product1.name); // "Тетрадь"
// console.log(product1.price); // 50                 // Так работать не будет
// console.log(product1.quantity); // 200             // т.к. к приватным полям мы не имеем прямого доступа,
// console.log(product1.getCost()); // 10000          // только через публичные методы

// const product2 = new Product('Ручка', 10, 5000); // выбросится ошибка "Quantity is too high"

class Product2 {
    #name;
    #price;
    #quantity;
    static maxQuantity = 200;

    constructor(name, price, quantity) {
        this.#name = name;
        this.#price = price;
        this.checkMaxQuantity(quantity);
    }
    
    checkMaxQuantity(quantity) {
        if (quantity > Product2.maxQuantity) {
            throw new Error('Quantity is too high');
        } else {
            this.#quantity = quantity;
        }
    }
    getName() {
        return this.#name;
    }
    getPrice() {
        return this.#price;
    }
    getQuantity() {
        return this.#quantity;
    }
    getCost() {
        return this.#price * this.#quantity; 
    }
    changePrice(price) {
        this.#price = price;
    }
    changeQuantity(quantity) {
        this.checkMaxQuantity(quantity);
    }
    
}

const prod1 = new Product2('Тетрадь', 50, 200);
console.log(prod1);
console.log(prod1.getName()); // "Тетрадь"
console.log(prod1.getPrice()); // 50
console.log(prod1.getQuantity()); // 200
console.log(prod1.getCost()); // 10000

prod1.changePrice(100);
prod1.changeQuantity(50);
console.log(prod1);

// const prod2 = new Product2('Ручка', 10, 5000); // выбросится ошибка "Quantity is too high"
// console.log(prod2);



console.log('Необязательное задание 2');
// Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта". Класс должен иметь публичные методы "изменить имя", "изменить возраст" и "изменить электронную почту", которые будут изменять соответствующие поля объекта. Также класс должен иметь статическое поле "максимальный возраст", которое будет задавать максимально допустимый возраст для всех создаваемых объектов.

// const user1 = new User('John', 30);
// console.log(user1.getName()); // "John"
// user1.setName('Mike');
// console.log(user1.getName()); // "Mike"
// console.log(User.getMaxAge()); // 120

// const user2 = new User('Jane', 150); // Error: Age is too high

class User {
    #name;
    #age;
    #email;
    static maxAge = 120;

    constructor(name, age, email) {
        this.#name = name;
        this.checkMaxAge(age);
        this.#email = email;
    }

    checkMaxAge(age) {
        if (age > User.maxAge) {
            throw new Error('Age is too high');
        } else {
            this.#age = age;
        }
    }

    getName() {
        return this.#name;
    }
    grtAge() {
        return this.#age;
    }
    getEmail() {
        return this.#email;
    }
    getMaxAge() {
        return this.maxAge;
    }

    setName(name) {
        this.#name = name;
    }
    setAge(age) {
        this.checkMaxAge(age);
    }
    setEmail(email) {
        this.#email = email;
    }
}

const user1 = new User('John', 30);
console.log(user1);
console.log(user1.getName()); // "John"
user1.setName('Mike');
console.log(user1.getName()); // "Mike"
console.log(User.maxAge); // 120

const user2 = new User('Jane', 150); // Error: Age is too high
console.log(user2);