package com.controller;

import com.component.CheckCode;
import com.repository.UserRepository;
import com.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * @Author: ZhangOcean
 * @Description: 处理注册页面
 * @Date: Created in 20:51 2017/11/26
 */
@Controller
public class RegisterController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CheckCode checkCode;

    @RequestMapping("/doRegister")
    @ResponseBody
    public Boolean register(HttpServletRequest request) {

        String name = request.getParameter("name1");
        String password = request.getParameter("password1");
        String userCode = request.getParameter("userCode1");

        User user = new User(name, password);

        Boolean code = checkCode.checkCode(request,userCode);

        if(code){
            userRepository.save(user);
        }
        System.out.println(code.toString());

        return code;
    }

}
