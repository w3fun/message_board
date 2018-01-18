package com.controller;

import com.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * @Author: ZhangOcean
 * @Description: 处理登录后的结果
 * @Date: Created in 13:04 2017/11/25
 */

@Controller
public class LoginController {

    @Autowired
    CheckUserMatch checkUserMatch;

    @RequestMapping("/doLogin")
    @ResponseBody
    public int doLogin(HttpServletRequest request, Model model) {

        User user = new User();

        user.setUser_Name(request.getParameter("name"));
        user.setUser_Password(request.getParameter("password"));

        System.out.println(user.getUser_Name());
        model.addAttribute("user",user);

        int checkMath = checkUserMatch.checkUserMatch(user.getUser_Name(), user.getUser_Password());

        System.out.println(checkMath);
        return checkMath;
    }

}
