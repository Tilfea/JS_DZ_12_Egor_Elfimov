document.write('<p><strong>Первое задание</strong></p> <p>Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.</p>')
let m = [1, 2, 3, 4, 5]
for (i = 0; i < m.length; i++) {
    document.write(m[i])
}

document.write('<br/><p><strong>Второе задание</strong></p> <p>Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут быть положительными и отрицательными. Выведите на экран только отрицательные числа, которые больше -10, но меньше -3.</p>')
let n = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]
for (i = 0; i < n.length; i++) {
    if (n[i] > -10 && n[i] < -3) {
        document.write(n[i])
    }
}

document.write('<br/><p><strong>Третье задание</strong></p><p>Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result и выведите.</p > ')
let o = [];
let result = 0; 
for (i = 23; i < 57; i++) {
    o.push(i);
    result += i;
}
document.write(`Цикл for: ${o} <br/>`)
let o2 = [];
let top1 = 23;
while(top1 >= 23 && top1 < 57) {
    o2.push(top1);
    top1 +=1;
}
document.write(`Цикл while: ${o2} <br/>`)
document.write(`Сумма значений цикла for равна ${result}`)


document.write('<br/><p><strong>Четвертое задание</strong></p><p>Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.</p>')
let p = ['10', '20', '30', '50', '235', '3000']
for (let i = 0; i < p.length; i++) {
    if (p[i][0] == 1 || p[i][0] == 2 || p[i][0] == 5) {
        document.write(p[i], '<br/>')

    }
}

document.write('<br/><p><strong>Пятое задание</strong></p><p>Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.</p>')
let day = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
for (i = 0; i < day.length; i++) {
    if (day[i] == 'СБ' || day[i] == 'ВС') {
        document.write(`<strong>${day[i]}</strong> `)
    } else { document.write(`${day[i]} `) }
}

document.write('<br/><p><strong>Шестое задание</strong></p><p>Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, и получите последний элемент массива, используя свойство length.</p>')
let r = ['10', '20', '30', '50', '235', '3000']
r.push('Hello')
document.write(`<br/>Последний элемент массива равен ${r[r.length-1]}`)

document.write('<br/><p><strong>Седьмое задание</strong></p><p>Запросите у пользователя по очереди числовые значения при помощи prompt и сохраните их в массив. Собирайте числа до тех пор пока пользователь не введет пустое значение. Выведите получившийся массив на экран. Выполните сортировку чисел массива, и выведите его на экран.</p>')

document.write('<br/><p><strong>Восьмое задание</strong></p><p>Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), используя цикл while и метод reverse.</p>')
let arr = [12, false, 'Текст', 4, 2, -5, 0]
document.write(`Массив, развернутый методом reverse: ${arr.reverse()}`)

document.write('<br/><p><strong>Девятое задание</strong></p><p>Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].</p>')

document.write('<br/><p><strong>Десятое задание</strong></p><p>Найдите сумму элементов массива между двумя нулями (первым и последним нулями в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или [1,8,0,13,76,8,7,0,22,0,2,3,2].</p>')

document.write('<br/><p><strong>Одинадцатое задание</strong></p><p>*** Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает пользователь. Например: высота = 5, на экране:</p>')
function triangle(n){
    for (i = 0; i < n; i++){
        document.write(' ' * (n - 1 - i) + '^' * (1 + i * 2))
    }
}
let n = 5
triangle(n)