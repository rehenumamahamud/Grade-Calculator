let num = Number(prompt('Enter your number'));

if(num >= 80 && num <= 100){
    document.querySelector('h1').innerText = 'A+';
}else if(num >= 70 && num < 80){
    document.querySelector('h1').innerText = 'A';
}else if(num >= 60 && num < 70){
    document.querySelector('h1').innerText = 'A-';
}else if(num >= 50 && num < 60){
    document.querySelector('h1').innerText = 'B';
}else if(num >= 40 && num < 50){
    document.querySelector('h1').innerText = 'C';
}else if(num >= 33 && num < 40){
    document.querySelector('h1').innerText = 'D';
}else if(num >= 0 && num < 33){
    document.querySelector('h1').innerText = 'F';
}else if(num >= 0 && num > 100){
    document.querySelector('h1').innerText = 'Invalid Number';
}