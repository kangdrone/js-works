/* 나이를 계산하는 프로그램*/

var currentYear = 2021;  //현재 년도

var birthYear = prompt("태어난 년도를 입력하세요(YYYY)");
var age = currentYear - birthYear + 1;

document.write(currentYear + "년 현재<br>");
document.write(birthYear + "년에 태어난 사람은 " + age + "세 입니다");