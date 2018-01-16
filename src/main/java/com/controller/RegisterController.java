package com.controller;

import com.component.CheckCode;
import com.component.CheckUserExist;
import com.model.User;
import com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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

    @Autowired
    private CheckUserExist checkUserExist;

    @RequestMapping(value = "/doRegister", method = RequestMethod.POST)
    @ResponseBody
    public int register(HttpServletRequest request) {

        String name = request.getParameter("name1");
        String password = request.getParameter("password1");
        String userCode = request.getParameter("userCode");

        User user = new User(name, password);

        int code = checkCode.checkCode(request,userCode);

        int checkUser = checkUserExist.checkUserExist(name);
        if(code == 0){
            if(checkUser == 0){
                userRepository.save(user);
            } else {
                return checkUser;
            }
        }

        return code;
    }

}
