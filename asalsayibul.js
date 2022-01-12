
function showPrimeNumber(lownumber, highnumber){

    for(let i =lownumber; i<=highnumber;i++){
        
        let isPrime  =true; //tüm sayılar asal gibi
        
        for(let j =2;j<=i;j++){

            if(i%j===0 && j!==i){
                isPrime=false;
            }

        }

        if(isPrime){
            console.log(i);
        }
    }

}

showPrimeNumber(14,40); //manuel olarak bu değerler giriliyor.

//console.log(process); //node.js e ait global nesnelerden bir tanesi. Bize o anki işlemle ilgili bilgiler verir

//console.log(process.argv); //projeyi çalıştırırken kullanılan paramtelreli içeren array

module.exports = showPrimeNumber

