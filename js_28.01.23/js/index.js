let userResidence;
let userName;
let userAge;
let userCreditCard;

while (
    userResidence = prompt("Choose your country  (type UK or USA) / Виберіть вашу країну (наберіть UA для України)"),
    userResidence === 'UK' || userResidence === 'USA' || userResidence === 'UA') {
    break;
    alert('Wrong data / Невірні дані!');
}

if (userResidence === 'UK' || userResidence === 'USA') {
    while
        (userAge = prompt('Please enter your age'),
        isNaN(userAge),
        alert('Only numbers are allowed!!!')) {
        break
    }
    if (userAge >= 18) {
        for (; ;) {
            userName = prompt('Please enter your name');
            if (isNaN(userName))
                break;
            else alert('Name must contain letters!!!')
        }
        for (; ;) {
            userCreditCard = prompt('Please enter your credit card number "xxxx xxxx xxxx xxxx"');
            if (userCreditCard.match(/^(?=.*\d)[\d ]+$/) && userCreditCard.length == 19) {
                alert(`Good afternoon ${userName}, your year of birth is ${result = 2023 - userAge}. Funds will be sent to your card ${userCreditCard}. By place of residence ${userResidence}`);
                break
            }
            else alert('Not a valid card number!!!');
        }
    }
    else { alert('You screwed it up!! Run Vasya,run!'); window.close() }
}

else if (userResidence === 'UA') {
    for (; ;) {
        userAge = prompt('Введіть свій вік');
        if (isNaN(userAge))
            alert('Тільки цифри!!!');
        else break;
    }
    if (userAge >= 18) {
        for (; ;) {
            userName = prompt("Введіть ваше ім'я");
            if (isNaN(userName))
                break;
            else alert("Ім'я повинно містити літери!!!")
        }
        for (; ;) {
            userCreditCard = prompt("Введіть номер вашої кредитки у форматі 'xxxx xxxx xxxx xxxx'");
            if (userCreditCard.match(/^(?=.*\d)[\d ]+$/) && userCreditCard.length == 19) {
                alert(`Добрий день ${userName}, ваш рік народження ${result = 2023 - userAge}. Гроші будуть надіслані вам на картку ${userCreditCard}. По місцю проживання ${userResidence}`); break
            }
            else alert('Не вірно набраний номер картки!!!');
        }
    }
    else { alert('Ану шуруй звідси!!!'); window.close() };
}