package com.controller;

import com.Service.SaveLeaveWord;
import com.model.LeaveWord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @author: zhangocean
 * @Date: Created in 21:08 2018/1/15
 * Describe:
 */
@Controller
public class PublishController {

    @Autowired
    SaveLeaveWord saveLeaveWord;

    @RequestMapping(value = "/publish", method = RequestMethod.POST)
    @ResponseBody
    public int publishMessage(HttpServletRequest request){

        String utterer = request.getParameter("author");
        String content = request.getParameter("content");

        Date now = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        String dateString = simpleDateFormat.format(now);
        ParsePosition pos = new ParsePosition(0);
        Date publishDate = simpleDateFormat.parse(dateString, pos);

        LeaveWord leaveWord = new LeaveWord(utterer, publishDate, content);

        int saveSuccess = saveLeaveWord.saveLeaveWord(leaveWord);

        return saveSuccess;
    }

}
