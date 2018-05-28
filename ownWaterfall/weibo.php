<?php
/**
 * Created by PhpStorm.
 * User: lison
 * Date: 2018/4/20
 * Time: 17:04
 */
//作用是得到了全部数组返回随机一部分对象
//难点是json字符串转了php数组之后随机选一部分组成新得php数组，然后再转换回来json字符串
//然后其实随机得到新数组也是难点
//先array_rand(xxx,6)得到6个key组成的数组，然后再把这个keyarr的每一个值对应的phparr的每一个值就是一个对象
//最后装进去新数组，再变回json字符串
$weiboStr = file_get_contents("info/weibo.json");
//str=>php array
$weiboArr = json_decode($weiboStr);
//随机数组的几个key出来，以数组的形式装着
$keyArr =array_rand($weiboArr,6);
//把他们对应的值装进新数组
$newArr=array();
for($i=0;$i<count($keyArr);$i++){
    $key=$keyArr[$i];
    $oneobj =$weiboArr[$key];
    $newArr[$i]=$oneobj;
};
//我他妈忘记吧这个数组变回字符串了
$answer=json_encode($newArr);
echo $answer;
