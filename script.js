


var temp, temp2;

function test2()
 {
   
     temp = '<p><q>Инсктрукция PDF</q> <a href="Zayavlenie_dlya_bakalavrov.pdf" target="_blank">открыть в браузере</a>';
     temp2 = '<a href="2.rar" download="">Скачать</a>';
    var temp3 = '<q2><a href="2.rar" download="">Скачать</a></q2>';

  //document.getElementById("result").innerHTML = temp2; //вывод скачать




///////////////////////////////////////////////


var userDeviceArray = [
    {device: '<q1>Ваша ОС Android</q1>', platform: /Android/},
    {device: '<q1>Ваша ОС iPhone</q1>', platform: /iPhone/},
    {device: '<q1>Ваша ОС iPad</q1>', platform: /iPad/},
    {device: '<q1>Ваша ОС Windows Phone</q1>', platform: /Windows Phone/},
    {device: '<q1>Ваша ОС Linux</q1>', platform: /Linux_/},
    {device: '<q1>Ваша ОС Windows 10</q1>', platform: /Windows NT 10.0/}
];

var platform = navigator.userAgent;

//просто для примера
//
var T, q_ , q1_;
T = '<q1>Более подробно</q1><p>';
q_ = '<q1>';
q1_ = '</q1>'

    for (var i in userDeviceArray) {
        if (userDeviceArray[i].platform.test(platform)) 
        {
            //document.getElementById("result2").innerHTML = userDeviceArray[i].device;//выводим тип ОС из массива
            //document.getElementById("result3").innerHTML = T + q_ + platform + q1_; //тоже самое, но более подробно
           if(userDeviceArray[i].device == '<q1>Ваша ОС Windows 10</q1>')
           {
              document.getElementById("result").innerHTML = temp2;

           }

           if(userDeviceArray[i].device == '<q1>Ваша ОС Android</q1>')
           {
              document.getElementById("result").innerHTML = temp3;

           }
          




        }
    }
    return 'Неизвестная платформа!' + platform;
    

}

