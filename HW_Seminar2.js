console.log('Задание 1: ""Управление библиотекой книг""')

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    displayInfo() {
        console.log(`Автор: ${this.author}, название: ${this.title}, количество страниц: ${this.pages}`)
    }
}
 const book = new Book('Сказки', 'Пушкин', 200);
 book.displayInfo();


console.log('Задание 2: ""Управление списком студентов""')
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo() {
        console.log(`Name: ${this.name} \nAge: ${this.age} \nGrade: ${this.grade}`)
    }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();


console.log('Задание 3: "Телефонная книга"')
// Создать класс "Телефонная книга" с методами для добавления, удаления и поиска контактов по имени или номеру телефона.

// // Пример использования
// let phonebook = new Phonebook();
// phonebook.addContact("Иванов", "123-45-67");
// phonebook.addContact("Петров", "987-65-43");
// console.log(phonebook.findContactByName("Иванов")); // { name: "Иванов", phone: "123-45-67" }
// console.log(phonebook.findContactByPhone("987-65-43")); // { name: "Петров", phone: "987-65-43" }
// phonebook.deleteContact("Иванов");
// console.log(phonebook.contacts); // [{ name: "Петров", phone: "987-65-43" }]


class Phonebook {
    contacts = [];
    addContact(name, phone) {
        this.contacts.push({'name': name, 'phone': phone})
    };
    findContactByName(name) {
        return this.contacts.find(item => item.name == name);
    }
    findContactByPhone(phone) {
        return this.contacts.find(item => item.phone == phone);
    }
    deleteContact(name) {
        let index = this.contacts.indexOf(name);
        this.contacts.splice(index-1, 1);
    }

}
let phonebook = new Phonebook();
phonebook.addContact("Иванов", "123-45-67");
phonebook.addContact("Петров", "987-65-43");
console.log(phonebook.findContactByName("Иванов"));
console.log(phonebook.findContactByPhone("987-65-43"));
phonebook.deleteContact("Иванов");
console.log(phonebook.contacts);