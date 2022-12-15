const screen = document.querySelector('canvas');
const brush = screen.getContext('2d');

 //retangulos
brush.fillStyle = 'lightgrey';
brush.fillRect(0, 0, 600, 400);

brush.fillStyle = 'green';
brush.fillRect(0, 0, 200, 400);

brush.fillStyle = 'red';
brush.fillRect(400, 0, 600, 400);

//triangulo
brush.fillStyle = 'blue';
brush.beginPath();
brush.moveTo(300, 200);
brush.lineTo(200, 400);
brush.lineTo(400,400);
brush.fill();

//circulo
brush.fillStyle = 'yellow';
brush.beginPath();
brush.arc(300, 200, 50, 0, 2 * 3.14);
brush.fill();


