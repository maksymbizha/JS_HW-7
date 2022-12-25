/*   Перша частина вік */

const userAge = 2022 - Number(prompt('Коли ви народилися?'));
 console.log(userAge)

let userAgeResult;

if(userAge > 0 && userAge <101 && !isNaN(userAge)){
    userAgeResult = `Вам ${userAge} років.`;
} else {
    userAgeResult = 'Шкода, що ви не захотіли ввести свою дату народження.';
}


/*   Друга частина місто */
const userCity = prompt('В якому місті ви живете?');

let userCityResult;

if(isNaN(userCity)){
    switch (userCity){
        case 'Київ':
            userCityResult = 'Ви живеш у столиці України.';
            break;
        case 'Вашингтон':
            userCityResult= 'Ви живеш у столиці США.';
            break;
        case 'Лондон':
            userCityResult= 'Ви живеш у столиці Англіїі.';
            break;
        default: userCityResult = `Ви живеш у місті ${userCity}`;
    }
} else {
    userCityResult = 'Шкода, що ви не хочете ввести в якому місті живете.'
}


/*   Третя частина спорт */
const userSport = prompt('Який ваш улюблений вид спорту?');

let userSportResult;

switch (userSport){
    case 'Футбол':
        userSportResult = 'Круто! Хочеш стати Криштиану Роналдо?';
        break;
    case 'Баскетбол':
        userSportResult = 'Круто! Хочеш стати Майклом Джорданом?';
        break;
    case 'Кроссфіт':
        userSportResult = 'Круто! Хочеш стати Річем Фронінгом?';
        break;
    default: userSportResult = 'Шкода, що ви не хочете ввести свій улюблений вид спорту.';
}


/*   Четверта частина результат*/
alert(`${userAgeResult} 
${userCityResult}
${userSportResult}`);
