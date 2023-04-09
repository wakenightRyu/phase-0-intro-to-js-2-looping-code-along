function writeCards(arrayOfNames,event){
    let newArray = []
    for (let i=0; i < arrayOfNames.length; i++){
        let phrase = `Thank you, ${arrayOfNames[i]}, for the wonderful ${event} gift!`
        newArray.push(phrase)
    }
    console.log(newArray)
    return newArray
}

let team = ["harry","miles","david","katie"]

writeCards(team, "birthday")


function countDown(int){
    while (int >= 0){
        console.log(int)
        int--
    }
}

countDown(10)