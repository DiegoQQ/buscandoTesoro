let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
    let diffx = e.offsetX - target.x;
    let diffy = e.offsetY - target.y;

    return Math.sqrt((diffx * diffx) + (diffy * diffy));
}

let getDistanceHint = distance => {
    if (distance < 80) {
        return 'Esta muy cerca!';
    }else if(distance < 100){
        return 'Caliente';
    }else if(distance < 130){
        return 'Tibio';
    }else if(distance < 200){
        return 'Frio';
    }else{
        return 'Congelado!';
    }
}