


var temp, temp2;

function test2()
 {
   
     temp = '<p><q>Инсктрукция PDF</q> <a href="Zayavlenie_dlya_bakalavrov.pdf" target="_blank">открыть в браузере</a>';
     temp2 = '<a href="2.rar" download="">Скачать</a>';
    

document.getElementById("result").innerHTML = temp2;




///////////////////////////////////////////////


var userDeviceArray = [
    {device: '<q1>Ваша ОС Android</q1>', platform: /Android/},
    {device: '<q1>Ваша ОС iPhone</q1>', platform: /iPhone/},
    {device: '<q1>Ваша ОС iPad</q1>', platform: /iPad/},
    {device: '<q1>Ваша ОС Windows Phone</q1>', platform: /Windows Phone/},
    {device: '<q1>Ваша ОС Linux</q1>', platform: /Linux/},
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
            document.getElementById("result2").innerHTML = userDeviceArray[i].device;
            document.getElementById("result3").innerHTML = T + q_ + platform + q1_;
        }
    }
    return 'Неизвестная платформа!' + platform;
    

}

