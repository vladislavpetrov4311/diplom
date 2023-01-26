


var A, A2, temp, temp2;

function test()
 {
    A = document.getElementById("name").value; //получаем данные из формы 
    A2 = document.getElementById("name2").value;
     temp = '<p>Инсктрукция PDF <a href="Zayavlenie_dlya_bakalavrov.pdf" target="_blank">открыть в браузере</a>';
     temp2 = '<p>Файл для развёртывания ВМ на Вашей ОС <a href="2.rar" download>Скачать </a>';
    




   if(A=='Astra Linux' && A2 =='свой ПК')
   {
document.getElementById("result").innerHTML = temp;
//document.getElementById("result2").innerHTML = temp2;
   
   }

if(A=='Windows XP' && A2 =='335')
   {
document.getElementById("result").innerHTML = temp;
document.getElementById("result2").innerHTML = temp2;
   }
 


}

