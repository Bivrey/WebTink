"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно (а местами и нужно) дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    let [surname, name] = fio.split(' ');
    return `${name} ${surname}`;
}


// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    return Array.from(new Set(array));
}


// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
function calculateSalaryDifference(array) {
    if (array.length === 0) return 0;
    let maxSalary = Math.max(...array);
    let minSalary = Math.min(...array);
    return maxSalary / minSalary;
}


// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor() {
        this.dictionary = new Map();
    }

    add(word, definition) {
        if (typeof word !== 'string' || typeof definition !== 'string') {
            throw new Error('Both word and definition must be strings');
        }
        this.dictionary.set(word, definition);
    }

    get(word) {
        if (typeof word !== 'string') {
            throw new Error('Word must be a string');
        }
        return this.dictionary.get(word);
    }

    remove(word) {
        if (typeof word !== 'string') {
            throw new Error('Word must be a string');
        }
        this.dictionary.delete(word);
    }

    get size() {
        return this.dictionary.size;
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
