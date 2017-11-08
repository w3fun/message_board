// login board
// $(document).ready(function () {
//     $('#cover').on('click',function () {
//         if($('#password').attr('type') === 'text'){
//             $('#password').attr('type','password');
//             $('#little_pic').attr('class','glyphicon glyphicon-eye-open form-control-feedback');
//         }else{
//             $('#password').attr('type','text');
//             $('#little_pic').attr('class','glyphicon glyphicon-eye-close form-control-feedback');
//         }
//     })
// })

window.onload=function () {
    var oCover = document.getElementById("cover");
    var oPassWord = document.getElementById("password");
    var oLitPic = document.getElementById("little_pic");
    var oCover1 = document.getElementById("cover1");
    var oPassWord1 = document.getElementById("password1");
    var oLitPic1 = document.getElementById("little_pic1");
    var oPub = document.getElementById("pub");
    var oWord = document.getElementById("word");
    var oPubWords = document.getElementById("pub_words");
    var aUl = oPubWords.getElementsByClassName('ul-list');
    //password
    // function visible(oPass,oPic) {
    //     if (oPass.type === 'text') {
    //         oPass.type = 'password';
    //         oPic.className = 'glyphicon glyphicon-eye-open form-control-feedback';
    //     } else {
    //         oPass.type = 'text';
    //         oPic.className = 'glyphicon glyphicon-eye-close form-control-feedback';
    //     }
    // }
    oCover.onclick = function () {
        if (oPassWord.type === 'text') {
            oPassWord.type = 'password';
            oLitPic.className = 'glyphicon glyphicon-eye-open form-control-feedback';
        } else {
            oPassWord.type = 'text';
            oLitPic.className = 'glyphicon glyphicon-eye-close form-control-feedback';
        }
    }
    oCover1.onclick = function () {
        if (oPassWord1.type === 'text') {
            oPassWord1.type = 'password';
            oLitPic1.className = 'glyphicon glyphicon-eye-open form-control-feedback';
        } else {
            oPassWord1.type = 'text';
            oLitPic1.className = 'glyphicon glyphicon-eye-close form-control-feedback';
        }
    }
    //number warning
    // function countChar(textareaName,spanName){
    //     document.getElementById(spanName).innerHTML = document.getElementById(textareaName).value.length;
    //     // alert(document.getElementById(textareaName).value.length);
    // }
    oWord.onkeydown = function countChar(){
        document.getElementById("counter").innerHTML = document.getElementById("word").value.length;
    }
    oWord.onkeyup = function countChar(){
        document.getElementById("counter").innerHTML = document.getElementById("word").value.length;
    }
    //publish
    oPub.onclick = function () {
        if(oWord.value === '') {
            alert("请输入留言");
        } else {
            var oUl = document.createElement('ul');
            oUl.className = 'media-list ul-list';
            var aLi = oUl.getElementsByTagName('li');
            var curLi = document.createElement('li');
            curLi.className = 'media';
            //new media-left
            var curLeft = document.createElement('div');
            curLeft.className = 'media-left';
            curLi.appendChild(curLeft);
            var curLeftImg = document.createElement('img');
            curLeftImg.setAttribute('src','img/boy.png');
            curLeftImg.setAttribute('alt','李钟硕');
            var curLeftSpan = document.createElement('span');
            curLeftSpan.innerHTML = '李钟硕';
            curLeft.appendChild(curLeftImg);
            curLeft.appendChild(curLeftSpan);
            //new media-body
            var curBody = document.createElement('div');
            curBody.className = 'media-body';
            var curBodyP = document.createElement('p');
            curBodyP.innerHTML = oWord.value;
            var curBodyDiv = document.createElement('div');
            curBodyDiv.className = 'media-footer clearfix';
            var curBodyDivSpan = document.createElement('span');
            curBodyDivSpan.className = 'pull-right';
            curBodyDivSpan.innerHTML = '删除';
            var curBodyDivImg = document.createElement('img');
            curBodyDivImg.setAttribute('src','img/pl.png');
            curBodyDivImg.setAttribute('alt','评论');
            curBodyDivImg.setAttribute('title','评论');
            curBodyDivImg.className = 'com';
            curBodyDivImg.onclick = function () {
                var oTextarea = document.createElement('textarea');
                oTextarea.style.marginTop = '10px';
                oTextarea.style.width = '100%';
                oTextarea.style.height = '60px';
                oTextarea.style.resize = 'none';
                this.parentNode.appendChild(oTextarea);
            }
            var curBodyDivTime = document.createElement('time');
            var oDate = new Date();
            curBodyDivTime.innerHTML = oDate.toLocaleDateString();
            curBodyDiv.appendChild(curBodyDivSpan);
            curBodyDiv.appendChild(curBodyDivImg);
            curBodyDiv.appendChild(curBodyDivTime);
            curBody.appendChild(curBodyP);
            curBody.appendChild(curBodyDiv);
            curLi.appendChild(curBody);
            oUl.insertBefore(curLi,aLi[0]);
            oPubWords.insertBefore(oUl,aUl[0]);
            oWord.value = null;
        }
    };
    //comment
    var aCommentImg = document.getElementsByClassName('com');
    for(var i = 0;i < aCommentImg.length;i ++){
        aCommentImg[i].onclick = function () {
            // var FirstP = this.parentNode.parentNode.firstChild;
            var oTextarea = document.createElement('textarea');
            // var oTextareaParent = document.createElement('div');
            oTextarea.style.marginTop = '10px';
            oTextarea.style.width = '100%';
            oTextarea.style.height = '60px';
            oTextarea.style.resize = 'none';
            this.parentNode.appendChild(oTextarea);

            // if(aCommentLi.length === 0)
            // {
            //     var oHr = document.createElement('hr');
            //
            // }
        }
    }
    //delete

};