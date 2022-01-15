export const isRectangle = (x, y, r) => {
    if ((x >= r / 2) && (x < 0) && (y <= r) && (y >= 0)) {
        return true;
    }
    return false;
}

export const isTriangle = (x, y, r) => {
    if ((y <= (-x + r / 2)) && (x >= 0) && (y >= 0)) {
        return true;
    }
    return false;
}

export const isCircle = (x, y, r) => {
    if ((x * x + y * y <= r * r) && (x <= 0) && (y <= 0)) {
        return true;
    }
    return false;
}

export const hitCheck = (x, y, r) => {
    if (isTriangle(x, y, r) || isCircle(x, y, r) || isRectangle(x, y, r)) {
        return true;
    }
    return false;
}