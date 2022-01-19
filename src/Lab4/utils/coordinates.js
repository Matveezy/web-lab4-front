export function fromCoordinateToValues(xCoordinate , yCoordinate , r){
    let x = (r * (xCoordinate - 150) / 100) * (1/r) ;
    let y = (r * (150 - yCoordinate) / 100) * (1/r);
    return [x , y];
}
