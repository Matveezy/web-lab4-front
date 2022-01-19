export default class Drawing{

    static svgDrawing(r){
        if (r<0){
            r = 0;
        }
        let val_250 = 150 + (100 * r);
        let val_200 = 150 + (50 * r);
        let val_100 = 150 - (50 * r);
        let val_50 = 150 - (100 * r);
        let circe_val = 100 - (33 * 2 * (1-r));
        let rect = document.getElementById('rectangle');
        let triangle = document.getElementById('triangle');
        let circle = document.getElementById('circle');

        let lineXMinusR = document.getElementById('lineXminusR');
        let lineXMinirRdivTwo = document.getElementById('lineXminusRTwo');
        let minRLetterOnX = document.getElementById('minRLetterOnX');
        let minRDivTwoLetterOnX = document.getElementById('minRDivTwoLetterOnX');

        let line3 = document.getElementById('line3');
        let line4 = document.getElementById('line4');

        rect.setAttribute("points" , "150,150 150," + val_50 + " " + val_100 +"," + val_50 + " " + val_100 + ",150");
        triangle.setAttribute("points" , "150,150 " + val_200 +",150 150," + val_100);
        circle.setAttribute("d" , "M" + val_50 +  ",150 A" + circe_val + "," + circe_val + " 90 0,0 150," + val_250 + " L 150,150 Z");
        // lineXMinusR.setAttribute("x1" , 150 - (100 * r));
        // lineXMinusR.setAttribute("x2" , 150 - (100 * r));
        // lineXMinirRdivTwo.setAttribute("x1" , 150 - (50 * r));
        // lineXMinirRdivTwo.setAttribute("x2" , 150 - (50 * r));
        // minRLetterOnX.setAttribute("x" , 150 - (110 * r));


    }

}