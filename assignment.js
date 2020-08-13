function feetToMile(feet){
    return feet/5280.;
}
var resultMile = feetToMile(5280);
console.log(resultMile, "Mile");


function woodCalculator (chair, table, bed){
    return chair+(table*3)+(bed*5)
}
var woodResult = woodCalculator (8, 4, 2)
console.log(woodResult, "Cubic feet");


function brickCalculator(floor){
    if(floor<=10){
        return floor*1000*15;
    }
    else if(floor>10 && floor<=20){
        return (10*1000*15)+(floor-10)*1000*12;
    }
    else{
        return (10*1000*15)+(10*1000*12)+(floor-20)*1000*10;
    }
}

var brickResult = brickCalculator(25);
console.log(brickResult, "Bricks");

function tyniFriend(name1, name2,name3){
    friend1=name1.length;
    friend2=name2.length;
    friend3=name3.length;
    return Math.min(friend1,friend2,friend3);
}


function tyniFriend(name1,name2,name3){
    if(name1<name2){
        if(name1<name3){
            return name1;
        }
        else{
            return name3;
        }
    }
    else{
        if(name2<name3){
            return name2;
        }
        else{
            return name3;
        }
    }
}
var friendResult = tyniFriend("Nazmul","Hasan","Jubair");
console.log(friendResult);