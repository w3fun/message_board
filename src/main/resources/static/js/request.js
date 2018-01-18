function request() {
    //页面加载时请求，将内容填充到页面
    $.ajax({
        type:'POST',
        url:'',
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
            $('#pub_words').html('');
            for(var i = 0;i < data.message.length;i ++)
            {
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
                    '                            <time datatime="'+ data.message[i].date +'"> '+ data.message[i].date + '</time>' + '' +
                    '                            <div class="comSpace vanish">' +
                    '                                <textarea name="comText" class="comText"></textarea>' +
                    '                                <button type="text" class="comBtn btn btn-default pull-right" index="' + data.message[i].index + '">评论</button>' +
                    '                            </div>' +
                    '                        </div>' +
                    '                    </div>' +
                    '                </li>' +
                    '            </ul>')
                $('#pub_words').append(message);
                var comment = $('<ul class="media-list comment"></ul>');
                $('.message').eq(i).append(comment);
                if(!isEmptyObject(data.message[i].comment)) {
                    var hr = $('<hr/>');
                    $('.comment').eq(i).append(hr);
                    if(data.message[i].comment.length <= 3)
                    {
                        for (var j = 0; j < data.message[i].comment.length; j++) {
                            var comContent = $('<li class="media">' +
                                '                                <div class="media-left">' +
                                '                                    <img src="../static/img/girl-2.png" alt="头像"/>' +
                                '                                    <span>' + data.message[i].comment[j].author + '</span>' +
                                '                                </div>' +
                                '                                <div class="media-body">' +
                                '                                    <p>' + data.message[i].comment[j].content + '</p>' +
                                '                                    <div class="media-footer">' +
                                '                                        <button class="delete pull-right">删除</button>' +
                                '                                        <time datatime="' + data.message[i].comment[j].date + '">' + data.message[i].comment[j].date + '</time>' +
                                '                                    </div>' +
                                '                                </div>' +
                                '                            </li>');
                            $('.comment').eq(i).append(comContent);
                        }
                    }else{
                        var last = data.message[i].comment.length - 1;
                        var comContent = $('<div index="'+ data.message[i].index +'"><a class="omit" href="javascript:;" title="点击查看更多评论">...</a></div>' +
                            '<li class="media">' +
                            '                                <div class="media-left">' +
                            '                                    <img src="../static/img/girl-2.png" alt="头像"/>' +
                            '                                    <span>' + data.message[i].comment[last].author + '</span>' +
                            '                                </div>' +
                            '                                <div class="media-body">' +
                            '                                    <p>' + data.message[i].comment[last].content + '</p>' +
                            '                                    <div class="media-footer">' +
                            '                                        <button class="delete pull-right">删除</button>' +
                            '                                        <time datatime="' + data.message[i].comment[last].date + '">' + data.message[i].comment[j].date + '</time>' +
                            '                                    </div>' +
                            '                                </div>' +
                            '                            </li>');
                        $('.comment').eq(i).append(comContent);
                    }
                }
            }
            $('.omit').on('click',function () {
                var parentDiv = $(this).parent();
                parentDiv.html('');
                for(var j = 0;j < data.message[parentDiv.attr('index')].comment.length - 1;j ++)
                {
                    var comContent = $('<li class="media">' +
                        '                                <div class="media-left">' +
                        '                                    <img src="../static/img/girl-2.png" alt="头像"/>' +
                        '                                    <span>' + data.message[parentDiv.attr('index')].comment[j].author + '</span>' +
                        '                                </div>' +
                        '                                <div class="media-body">' +
                        '                                    <p>' + data.message[parentDiv.attr('index')].comment[j].content + '</p>' +
                        '                                    <div class="media-footer">' +
                        '                                        <button class="delete pull-right">删除</button>' +
                        '                                        <time datatime="' + data.message[parentDiv.attr('index')].comment[j].date + '">' + data.message[parentDiv.attr('index')].comment[j].date + '</time>' +
                        '                                    </div>' +
                        '                                </div>' +
                        '                            </li>');
                    parentDiv.append(comContent);
                }
            })
            $.each($('.com'),function (i,domEle) {
                $(domEle).on('click',function () {
                    $('.comSpace').eq(i).toggleClass('vanish');
                })
            })
            $('.comBtn').on('click',function () {
                var sibling = $(this).prev().val();
                if(sibling == '')
                {
                    alert('回复不能为空！');
                }else {
                    $.ajax({
                        type:'POST',
                        url:'',
                        dataType:'json',
                        data:{
                            "author":sessionStorage.getItem(lybName),
                            "comment":sibling,
                            "index":$(this).attr('index')
                        },
                        success:function (data) {
                            if(data){
                                alert('回复成功！');
                                request();
                            } else {
                                alert('回复失败！')
                            }
                        },
                        error:function () {
                            alert('回复失败！请刷新重试');
                        }
                    })
                }
            })
        },
        error:function () {

        }
    })
}
request();