
 // asenkron yapısı --> promise ler. Bir işlem sonucunu temsil ediyorlar. 2 parametre taşır ;resolve ve reject. İşlem yapılırken eğer cevaba ihtiyaca ihtiyacın olursa olumluda resolve, olumsuzlukta da rejecti al ve onların dediği komutları yerine getir

  /*  const promise1 = new Promise((resolve,reject) =>{
    resolve('veriler alındı');
    reject('bağlantı hatası');  //hata durumunda çalışacak. hatanın cache edilmesi gerek.

 });

 console.log(promise1) //tanımlanmadan çalışırsa undefined döner çünkü resolve halinde bir dönüş yok

//promise ifadeleri bu şekilde yazılır

promise1
    .then(value=> {  //then ile reject yakalayamazsın
        console.log(value)
    }).catch(err =>{  // catch ile hata yakalayıp rejectin unhandled hata vermesini engellersin 
        console.log(err)
    });

//resolve ve reject aynı anda çalışırken önce resolve drumunu yakalaycağından reject çalışmaz promise bi durumda yapılacak iş .çin szöz demekti zaten resolve da sözünü tuttuğu için rejecte gitmez. satırsıraları farklı olsaydı durum değişirdi 


*/

//-------- Async Await--------


function getData(data){
    return new Promise((resolve,reject)=>{
        console.log('veriler alınıyır')
        if(data){
            resolve('Veriler aındı')

        }
        else{
            reject('Veriler alınamadı')
        }
    })
}

function cleanData(data){
    return new Promise((resolve,reject)=>{
        console.log('veriler siliniyor')
        if(data){
            resolve('Veriler silindi')

        }
        else{
            reject('Veriler silinemedi')
        }
    })
}

/*getData(true)
.then(result=>{
    console.log(result)

    return cleanData(false)
    .then(result=>{
        console.log(result)
    })
    .catch(err=>{
        console.log(err)
    })

})*/


async function processData(){

    //ilk yapılacak iş için await kullanılıyor. ne işlem olursa olsun önce bu işlemin yapılması gerekiyor yani. bunu da funciton ın async olarak tanımlanmasından anlıyor
    const reveivedData = await getData(false)
    console.log(reveivedData)
    const cleanData = await cleanData(true)
    console.log(cleanData)
}

processData()

//avantaj 1) yazım kolay  2) sıralı olarak yapılacak işler yazılıyor. asenksron sıra takip zor senkron kolay. async-await yapısı ile asenkron illemi senkron olarak takip etmeni sağlıyor yazım şeklinden dolayı 