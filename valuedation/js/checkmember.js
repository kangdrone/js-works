
function checkMember(){
    var form = document.regForm;
    var id = form.memberid.value;
    var pwd1 = form.passwd.value;
    var pwd2 = form.passwd_confirm.value;
    var name = form.name.value;

    var regEx = /^[0-9A-Za-z]{5,10}$/;

    // 아이디는 4자에서 8자 까지 입력가능

    if(id.length < 4 || id.length > 8){
        alert("아이디는 4자에서 8자까지 입력해 주세요.");
        form.id.select();
        return false;
    }else if(!regEx.test(pwd1)){   //패스워드와 정규식이 일치하지 않으면
        alert("패스워드는 5자에서 10자까지 영문과 숫자포함 입력해주세요");
        form.pwd.select();
        return false;
    }else if(pwd1 != pwd2){
        alert("비밀번호를 동일하게 입력해주세요");
        form.pwd2.select();
        return false;
    }else if(name == ""){
        alert("이름은 필수 입력 사항입니다.");
        form.name.focus();   // 커서위치 이동
        return false;
    }
    else{
        form.submit();
    }
}