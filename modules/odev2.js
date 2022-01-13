
var posts=[{name:`Book1`,author:`ali`}]

const addPost=(post)=>{

    const promise1 = new Promise((resolve, reject)=>{
        posts.push(post)
        if(post){
            resolve(`Post eklendi ${post}`)
        }else{
            
            reject("Post eklenemedi")
        }
        
    })

    return promise1;
}

const listpost =()=>{
    posts.map(post=>{
        console.log(post)
    })
}

async function showPosts(){

    try{
        await addPost({name:"book2",author:"veli"})
        await addPost({name:"book3",author:"ayse"})
        listpost()
    
    }
    catch(error){
        console.log(error)
    }

}

showPosts()
