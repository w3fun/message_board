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
//限制验证码只能输字母和数字
$.fn.onlyNumAlpha = function () {
    $(this).keypress(function (event) {
        var eventObj = event || e;
        var keyCode = eventObj.keyCode || eventObj.which;
        if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || keyCode == 8)
            return true;
        else
            return false;
    }).focus(function () {
        this.style.imeMode = 'disabled';//禁止中文输入法 兼容性：只支持IE和FF
    }).bind("paste", function () {
        var clipboard = window.clipboardData.getData("Text");//获取剪贴板里的内容
        if (/^(\d|[a-zA-Z])+$/.test(clipboard))
            return true;
        else
            return false;
    });
};
$(function () {
    $('.identify').onlyNumAlpha();
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
$('#mySign input').eq(2).on('blur',function () {
    if($(this).val() == ''){
        $('.prompt').eq(4).css('visibility','visible');
    }else{
        $('.prompt').eq(4).css('visibility','hidden');
    }
})
//提交注册信息并跳转页面
$('.signBtn:first').on('click',function () {
    var signInput = $('#mySign input');
    if(signInput.eq(2).val() == '' || !reg.test(signInput.eq(1).val())||signInput.eq(1).val() == ''
        || signInput.eq(0).val().indexOf(' ') != -1 || signInput.eq(0).val() == ''){
        alert('请正确填写信息');
    }else {
        $.ajax({
            type:"POST",
            dataType:"json",
            url:"/doRegister",
            data:{
                "name1":$('#name1').val(),
                "password1":$('#password1').val(),
                "userCode":$('#identify1').val()
            },
            success:function (data) {
                if(data == 0){
                    alert('注册成功！请登录！');
                    $('#mySign').modal('hide');
                    $('#myLogin').modal('show');
                }
                else if(data == 1) {
                    alert('验证码错误！')
                }else{
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
$('.loginBtn:first').on('click',function () {
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
            url:"/doLogin",
            dataType:'json',
            data:{
                "name":$('#name').val(),
                "password":$('#password').val()
            },
            success:function (data) {
                if(data == 0){
                    if($('#remember').attr('checked') == 'checked'){
                        localStorage.setItem('lybName',$('#myLogin input').eq(0).val());
                        localStorage.setItem('lybPassword',$('#myLogin input').eq(1).val());
                    }
                    sessionStorage.setItem('lybName',$('#myLogin input').eq(0).val());
                    sessionStorage.setItem('lybPassword',$('#myLogin input').eq(1).val());
                    alert('登录成功！');
                    $('#myLogin').modal('hide');
                    $('.login-box').html('welcome! ' + sessionStorage.getItem('lybName'));
                }else {
                    alert('登录失败！请检查用户名和密码是否正确')
                }
            },
            error:function () {
                alert('登录失败，请刷新重试');
            }
        })
    }else{
        alert('请正确填写信息');
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
    }else if(!sessionStorage.getItem('lybName')){
        alert('请先登录')
    } else {
        $.ajax({
            type:'POST',
            url:'/publish',
            dataType:'json',
            data:{
                "author":sessionStorage.getItem('lybName'),
                "content":$('#word').val()
            },
            success:function (data) {
                if(data == 0){
                    alert('发表成功！');
                    $('#word').val('');
                    request(firstLength);
                }else {
                    alert('发表失败！');
                }
            },
            error:function () {
                alert('发表失败，请刷新重试');
            }
        })
    }
})
//刷新验证码
$('.change:first').on('click',function () {
    var img_src ='/getCheckCode?t='+Math.random();
    $('.identifyPic').attr('src',img_src);
})

