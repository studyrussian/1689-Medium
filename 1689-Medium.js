/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {


   //the goal is to return the ihghest number in the number string 
   //if there are only 1 ands 0s tho just return 1

//declare needed variables for task
    n = String(n).split('')
    let regex = /[2-9]/
    let check = false 

    console.log(n)
    //check each value using a for loop
    for(i in n) {
        if(n[i].match(regex)){
            check = true
            break;
        }
    }
    if(!check) {
        return 1
    }
    
    //use map to mp over n to sort from highest to lowest andre turn the last element
    n = n.map((x) => Number(x)).sort()
    return n[n.length-1]
  
    // if(!check){
    //     return 1
    // }
    // n=n.map((x)=> Number(x)).sort()
    // return n[n.length-1]
};
Console
