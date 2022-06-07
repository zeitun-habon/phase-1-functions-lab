// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue-42)
  }
  function distanceFromHqInFeet(someValue) {
   let dis= distanceFromHqInBlocks(someValue)
    return dis*264
}
function distanceTravelledInFeet(start, destination) {
     
     const distance= (destination-start)*264
     
    return Math.abs(distance)
  }




function calculatesFarePrice(start, destination) {
    let distanceByFeet=distanceTravelledInFeet(start, destination)
    if(distanceByFeet<=400){
        return 0
    }
    else if(distanceByFeet>400 && distanceByFeet<=2000){
        const priceInCents=(distanceByFeet-400)*2
         return priceInCents/100
    }
    else if(distanceByFeet>=2000 && distanceByFeet<=2500){
        return 25
    }
    else if(distanceByFeet>2500){
        
        return 'cannot travel that far'
    }

  }
