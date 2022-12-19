"use strict";
// Напишите скрипт, который считает количество секунд в часе.

// Запросить у пользователя количество часов
// Посчитать сколько секунд в этом количестве часов
// Записать вычисленное значение в переменную
// Вывести эту переменную пользователю во всплывающем окне

let hours=+prompt('Enter hours count');
let sec=secCount(hours);
alert('There are '+sec+' secconds in '+hours+' hours');
function secCount(hours){
    let secInHours=hours*Math.pow(60,2);
    return secInHours;
}