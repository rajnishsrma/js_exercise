
/**  Compare two Object whether is same or not */

// define objects
const ronit = {
    city : "banglore",
    age : 25,
    salary : "7.5LPA"
}

const rajat = {
    city : "Raipur",
    age : 32
}

const rajnish = {
    city : "banglore",
    age : 25
}

function compareObj(obj1, obj2){
   // extract all keys from an object obj1
   let obj1Keys = Object.keys(obj1) ;

 // let result =  obj1Keys.every((elm) => obj1[elm] == obj2[elm] && obj2.hasOwnProperty(elm))

 let result = obj1Keys.every((elm) => {
    console.log("value of obj1 : ",obj1[elm]);
    console.log("value of obj2 : ",obj2[elm]);
    console.log("hasOwnProperty in obj2 : ", obj2.hasOwnProperty(elm));

    if(obj1[elm] == obj2[elm] && obj2.hasOwnProperty(elm)){
        return true ;
    }else{
        return false  ;
    }
 })

  console.log(result)
   
}



compareObj(ronit, rajat)