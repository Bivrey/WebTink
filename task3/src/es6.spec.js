const assert = require('assert');
const core = require('./es6');

describe('es6', () => {
    describe('#fioToName', () => {
        it('ФИО в Имя Фамилия корректно', () => {
            assert.strictEqual(core.fioToName('Иванов Иван Иванович'), 'Иван Иванов');
        });

        it('ФИ в Имя Фамилия', () => {
            assert.strictEqual(core.fioToName('Петров Петр'), 'Петр Петров');
        });
    });

    describe('#filterUnique', () => {
        it('массив с уникальными равен сам себе', () => {
            assert.deepStrictEqual(core.filterUnique([1, 2, 3]), [1, 2, 3]);
        });

        it('массив с неуникальными отфильтрован', () => {
            assert.deepStrictEqual(core.filterUnique([1, 1, 1, 1]), [1]);
        });

        it('пустой массив', () => {
            assert.deepStrictEqual(core.filterUnique([]), []);
        });
    });

    describe('#calculateSalaryDifference', () => {
        it('считает разницу корректно', () => {
            assert.strictEqual(core.calculateSalaryDifference([1, 2, 3]), 3);
        });

        it('на пустой массив возвращается falsy значение', () => {
            assert.strictEqual(!!core.calculateSalaryDifference([]), false);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(!!dic, true);
        });

        it('добавление и получение слова', () => {
            const dic = new core.Dictionary();
            dic.add('apple', 'A fruit');
            assert.strictEqual(dic.get('apple'), 'A fruit');
        });

        it('удаление слова', () => {
            const dic = new core.Dictionary();
            dic.add('apple', 'A fruit');
            dic.remove('apple');
            assert.strictEqual(dic.get('apple'), undefined);
        });

        it('проверка размера словаря', () => {
            const dic = new core.Dictionary();
            dic.add('apple', 'A fruit');
            dic.add('banana', 'Another fruit');
            assert.strictEqual(dic.size, 2);
        });

        it('бросает исключение при добавлении нестроковых значений', () => {
            const dic = new core.Dictionary();
            assert.throws(() => dic.add(123, 'number'), /string/);
        });

        it('бросает исключение при попытке получить нестроковое значение', () => {
            const dic = new core.Dictionary();
            dic.add('apple', 'A fruit');
            assert.throws(() => dic.get(123), /string/);
        });

        it('бросает исключение при попытке удалить нестроковое значение', () => {
            const dic = new core.Dictionary();
            dic.add('apple', 'A fruit');
            assert.throws(() => dic.remove(123), /string/);
        });
    });
});