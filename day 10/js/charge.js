//놀이공원 입장료 계산
//취학 전 아동 / 초,중등학생 / 고등학생 / 일반인

var age = 12;
var charge = 0;

if(age < 8){
    document.write("취학 전 아동입니다.<br>");
    charge = 1000;
}
else if(age >= 8 && age < 14){
    document.write("초등학생입니다.<br>");
    charge = 2000;
}
else if(age >= 14 && age < 20){
    document.write("중,고등학생입니다.<br>");
    charge = 2500;
}
else{
    document.write("일반인입니다.<br>");
    charge = 3000;
}
document.write("입장료는 <span class='charge'>" + charge + "</span>원 입니다.");