var today = new Date();
var hourNow = today.getHours();
var greeting;


if (hourNow > 7) {
    greeting = 'Bom dia';
} else if (hourNow > 12) {
    greeting = 'Boa tarde';
} else if (hourNow > 20) {
    greeting = 'Boa noite';
} else if (hourNow > 0) {
    greeting = 'É tarde: bom descanso';
} else {
    greeting = 'Bem-vindo!';
}

document.write(greeting);

