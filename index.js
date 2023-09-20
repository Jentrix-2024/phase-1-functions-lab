// Code your solution in this file!
function distanceFromHqInBlocks(distanceInblocks){
 return distanceInblocks>=42?(distanceInblocks-42):(42-distanceInblocks);
 }



function distanceFromHqInFeet(pickupLocation){
const distanceInFeet= distanceFromHqInBlocks(pickupLocation)*264
return distanceInFeet;
}
function distanceTravelledInFeet(start,pickupLocation){
    return start>pickupLocation?(start-pickupLocation)*264:(pickupLocation-start)*264
}
function calculatesFarePrice(start,pickupLocation){
    const distance=distanceTravelledInFeet(start,pickupLocation)
    {
    if (distance<=400)
    return 0;
    else if 
    (distance<2000,distance>400)
    return(distance-400)*0.02;
     else if 
    (distance>2000,distance<2500)
    return $25;
    else 
     return'cannot travel that far';
    }
}