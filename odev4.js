const fs =require('fs');

//JSON dosya oluşturma CREATE 
fs.writeFile('employee.json', ' {"name": "Employee 1 Name", "salary": 2000,', 'utf8', (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("veri oluşturuldu")
    }
} );

//Dosyaya veri ekleme UPDATE

 fs.appendFile('employee.json', ' "name": "Employee 2 Name", "salary": 2000}', 'utf8', (err) => {
     if (err) console.log(err);
 });

//Dosya okuma READ
fs.readFile('employee.json','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
});

//Dosyayı silme DELETE

  fs.unlink('employee.json', (err) => {
      if (err) console.log(err);
  });

