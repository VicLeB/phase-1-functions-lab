function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks - 42)
};

distanceFromHqInBlocks(43);

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * 264
};

distanceFromHqInFeet();

function distanceTravelledInFeet(start, destination){
    return Math.abs(start-destination) *264
};

distanceTravelledInFeet();

function calculatesFarePrice(start, destination){
    let distance = Math.abs(start- destination) * 264
    if (distance <= 400){
        return 0
    } else if (distance >400 && distance <2000){
        let price = (distance * 0.02 - 8).toFixed(2);
        return parseFloat(price);
    } else if (distance >= 2000 && distance <= 2500){
        return 25 
    }else if (distance >2500){return "cannot travel that far"
    }
}