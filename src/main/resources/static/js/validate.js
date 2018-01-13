//点击密码是否可见
$('#cover').on('click',function () {
    var oPassWord = $('#password');
    var oLitPic = $('#little_pic');
    if(oPassWord.attr('type') === 'text'){
        oPassWord.attr('type','password');
        oLitPic.attr('class','glyphicon glyphicon-eye-open form-control-feedback')
    }else{
        oPassWord.attr('type','text');
        oLitPic.attr('class','glyphicon glyphicon-eye-close form-control-feedback')
    }
})
$('#cover1').on('click',function () {
    var oPassWord1 = $('#password1');
    var oLitPic1 = $('#little_pic1');
    if(oPassWord1.attr('type') === 'text'){
        oPassWord1.attr('type','password');
        oLitPic1.attr('class','glyphicon glyphicon-eye-open form-control-feedback')
    }else{
        oPassWord1.attr('type','text');
        oLitPic1.attr('class','glyphicon glyphicon-eye-close form-control-feedback')
    }
})
// 统计输入框已输入字数
var oWord = $('#word');
oWord.on('keydown',function () {
    $('#counter').text(oWord.val().length);
})
oWord.on('keyup',function () {
    $('#counter').text(oWord.val().length);
})
//登录注册验证
var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/;
$('#myLogin input').eq(0).on('blur',function () {
    if($(this).val() == ''){
        $('.prompt').eq(0).css('visibility','visible');
    }else{
        $('.prompt').eq(0).css('visibility','hidden');
    }
})
$('#myLogin input').eq(1).on('blur',function () {
    if($(this).val() == ''){
        $('.prompt').eq(1).css('visibility','visible');
    }else{
        $('.prompt').eq(1).css('visibility','hidden');
    }
})
$('#mySign input').eq(0).on('blur',function () {
    if($(this).val().indexOf(' ') != -1 || $(this).val() == ''){
        $('.prompt').eq(2).css('visibility','visible');
    }else{
        $('.prompt').eq(2).css('visibility','hidden');
    }
})
$('#mySign input').eq(1).on('blur',function () {
    if(!reg.test($(this).val()) || $(this).val() == ''){
        $('.prompt').eq(3).css('visibility','visible');
    }else{
        $('.prompt').eq(3).css('visibility','hidden');
    }
})
//提交注册信息并跳转页面
$('.signBtn:first').on('click',function () {
    var signInput = $('#mySign input');
    if(!reg.test(signInput.eq(1).val())||signInput.eq(1).val() == ''
        || signInput.eq(0).val().indexOf(' ') != -1 || signInput.eq(0).val() == ''){

    }else {
        $.ajax({
            type:"POST",
            dataType:"json",
            url:"",
            data:{
                "name1":$('#name1').val(),
                "password1":$('#password1').val()
            },
            success:function (data) {
                if(data){
                    alert('注册成功！请登录！');
                    $('#mySign').fadeOut();
                    $('#myLogin').fadeIn();
                }
                else {
                    alert('该用户已存在！')
                }
            },
            error:function () {
                alert('注册失败！请刷新重试')
                }
            })
    }
})
//提交登录信息并跳转页面
//记住密码
$('.loginBtn:first').eq(0).on('click',function () {
    var flag = true;
    for(var j = 0;j < 2;j ++)
    {
        if($('#myLogin input').eq(j).val() == '')
        {
            flag = false;
        }
    }
    if(flag) {
        $.ajax({
            type:"POST",
            url:"",
            dataType:'json',
            data:{
                "name":$('#name').val(),
                "password":$('#password').val()
            },
            success:function (data) {
                if(data){
                    if($('#remember').attr('checked') == 'checked'){
                        localStorage.setItem('lybName',$('#myLogin input').eq(0).val());
                        localStorage.setItem('lybPassword',$('#myLogin input').eq(1).val());
                    }
                    sessionStorage.setItem('lybName',$('#myLogin input').eq(0).val());
                    sessionStorage.setItem('lybPassword',$('#myLogin input').eq(1).val());
                    alert('登录成功！');
                }else {
                    alert('登录失败！请检查用户名和密码是否正确')
                }
            },
            error:function () {
                alert('登录失败，请刷新重试');
                $('#myLogin').hide();
            }
        })
    }
})
if(localStorage.getItem("lybName") != '' && localStorage.getItem("lybPassWord") != '')
{
    $('#myLogin input').eq(0).val(localStorage.getItem("lybName"));
    $('#myLogin input').eq(1).val(localStorage.getItem("lybPassWord"));
    $('#remember').attr('checked','checked');
}
//发表
$('#pub').on('click',function () {
    if($('#word').val() == '') {
        alert('发表内容不能为空！');
    }else {
        $.ajax({

        })
    }
})
