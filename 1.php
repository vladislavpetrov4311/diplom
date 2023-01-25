<!DOCTYPE html>
<html>

<style>
   body {
    background-image: url(1.png); /* Путь к фоновому изображению */
    /*background-color: #c7b39b;  Цвет фона */
    width: 50px; height: 100px;
   }
  </style>

  <body>


  <form  name="forma" action="1.php" method="post">

<style >
   q{
       
 background: black;
        color: white;
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-65%, -130%) 
   } 

</style>


  <q> <select name="name" > 
    <optgroup label="Тип Вашей ОС">
     <option type="text">Windows 95</option> 
     <option type="text">Windows XP</option>
     <option type="text">Windows vista</option>
     <option type="text">Windows 7</option>
     <option type="text">Windows 10</option>
     <option type="text">Astra Linux</option>
     <option type="text">Ubuntu</option>
    </optgroup>
   </select> 
 


<select name="name2" >
 <optgroup label="Номер аудитории">
     <option type="text">свой ПК</option>
     <option type="text">333</option>
     <option type="text">335</option>
     <option type="text">337</option>
    </optgroup>
    </select>


   <p><input name="submit" type="submit" value="Найти"></p>


  </form>


 </body>
</html>



<?php

//$connect = mysqli_connect('localhost' ,  'root' , '', 'diplom');

//mysqli_set_charset($connect , "utf8");

$name = $_POST['name'];
$name2 = $_POST['name2']; 




//$result = mysqli_query($connect , "INSERT INTO `diplom`.`form1` ( `test` , `test2` ) VALUES ( '$name' , '$name2');");
//$result2 = mysqli_query($connect , "INSERT INTO `diplom`.`form1` ( `test2`) VALUES ( '$name2');");

if($name=='Windows 10' && $name2=='свой ПК')
{
    //$result2 = mysqli_query($connect , "INSERT INTO `diplom`.`form1` ( `test`) VALUES ( '$name2');");
    echo '<p>Инсктрукция PDF <a href="Zayavlenie_dlya_bakalavrov.pdf" target="_blank">открыть в браузере</a>';
    echo '<p>Файл для развёртывания ВМ на Вашей ОС <a href="Zayavlenie_dlya_bakalavrov.pdf" download>Скачать </a>';

}




?>