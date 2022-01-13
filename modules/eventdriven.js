 // single thread event driven --> gelen tüm işlemleri belirli bir sıraya sokuyor ama arka planda yine bir sürü iş yapılıyor. mesela kullanıcı sisteme giriyo biri DB kullanıyor. bunlar bi döngü içerisinde saklanıyor işlemler tek tek çözüldükçe diğerine geçirtiyor. db ye istek geldi onun olmasını,bitmesini beklemeden diğer işi yapabiliyorsun. thread bloklanmıyor yani. 
 //blocking - nonblocking -->blocklamada bir istek geliyor o istek bitmeden diğer işleme geçilmiyor single thread ve blocking durumu 
 //single thread non blocking de en üstteki yorumla aynı mantık. 

 //diğer yaklaşım multiple thread driven --> her olay için ayrı bir thread oluşturuyor. çoklu thread kullanımı var 

 const primeNumber =  require('./primeNumber'); //fonksiyon değişkene atıldı.

 primeNumber.sho