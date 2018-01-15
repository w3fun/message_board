//页面加载时请求，将内容填充到页面
$.ajax({
    type:'POST',
    url:'http://localhost:7070/post',
    dataType:'json',
    data:{

    },
    success:function (data) {
        // console.log(data.message[0]);
        function isEmptyObject(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        }
        var flagCom = 0;
        for(var i = 0;i < data.message.length;i ++)
        {
            if(!isEmptyObject(data.message[i].comment)){
                console.log(data.message[i].content);
                var message = $(' <ul class="media-list ul-list">' +
                    '                <li class="media">' +
                    '                    <div class="media-left">' +
                    '                        <img src="../static/img/boy.png" alt="头像"/>' +
                    '                        <span>'+ data.message[i].author +'</span>' +
                    '                    </div>' +
                    '                    <div class="media-body message">' +
                    '                        <p>'+ data.message[i].content +'</p>' +
                    '                        <div class="media-footer clearfix">' +
                    '                            <button class="delete pull-right">删除</button>' +
                    '                            <img src="../static/img/pl.png" class="com" alt="评论" title="评论"/>' +
                    '                            <time datatime="'+ data.message[i].date +'"> '+ data.message[i].date + '</time>' +
                    '                        </div>' +
                    '                    </div>' +
                    '                </li>' +
                    '            </ul>')
                $('.ul-list:last').after(message);
                var comment = $('<ul class="media-list comment"><hr/></ul>');
                $('.message').eq(i+2).append(comment);
                for(var j = 0;j < data.message[i].comment.length;j ++)
                {
                    var comContent = $('<li class="media">' +
                        '                                <div class="media-left">' +
                        '                                    <img src="../static/img/girl-2.png" alt="头像"/>' +
                        '                                    <span>'+ data.message[i].comment[j].author +'</span>' +
                        '                                </div>' +
                        '                                <div class="media-body">' +
                        '                                    <p>'+ data.message[i].comment[j].content +'</p>' +
                        '                                    <div class="media-footer">' +
                        '                                        <button class="delete pull-right">删除</button>' +
                        '                                        <time datatime="'+ data.message[i].comment[j].date +'">'+ data.message[i].comment[j].date +'</time>' +
                        '                                    </div>' +
                        '                                </div>' +
                        '                            </li>');
                    $('.comment').eq(flagCom+1).append(comContent);
                }
                flagCom ++;
            }
        }
    },
    error:function () {
    }
})