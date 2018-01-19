package com.controller;

import com.Service.LoginRepository;
import com.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
    LoginRepository loginRepository;

    @RequestMapping("/doLogin")
    @ResponseBody
    public int login(HttpServletRequest request, Model model) {

        User user = new User();

        user.setUser_Name(request.getParameter("name"));
        user.setUser_Password(request.getParameter("password"));

        model.addAttribute("user",user);

        int checkUser = loginRepository.checkUser(user);

        return checkUser;
    }

}
