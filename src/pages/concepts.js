export default function Concepts(){

    const screen = document.querySelector('canvas');
    const brush = screen.getContext('2d');

    function DrawRectangle(color, x1, y1, x2, y2){
        brush.fillStyle = color;
        brush.fillRect(x1, y1, x2, y2);
    }

    function DrawTriangle(color, x1, y1, x2, y2, x3, y3){
        brush.fillStyle = color;
        brush.beginPath();
        brush.moveTo(x1, y1);
        brush.lineTo(x2, y2);
        brush.lineTo(x3, y3);
        brush.fill();
    }

    function DrawCircles(color, x, y, raio, ang1, ang2){
        brush.fillStyle = color;
        brush.beginPath();
        brush.arc(x, y, raio, ang1, ang2);
        brush.fill();
    }

    function DrawScreen(){        
        DrawRectangle('lightgrey', 0, 0, 600, 400);
        DrawRectangle('green', 0, 0, 200, 400);
        DrawRectangle('red', 400, 0, 600, 400);   
        
        DrawTriangle('blue', 300, 200, 200, 400, 400, 400);    
        
        DrawCircles('yellow', 300, 200, 50, 0, 2*3.14)        
    }

    return( 
        < DrawScreen />
    )
}

