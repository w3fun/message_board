package com.controller;

import com.repository.UserRepository;
import com.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

/**
 * @Author: ZhangOcean
 * @Description: 验证登录信息
 * @Date: Created in 21:27 2017/11/25
 */
@Controller
public class UserController {

    @Autowired
    private UserRepository userRepository;

    public Boolean getByUser(User user) {

        try {
            String name = user.getUser_Name();
            String password = user.getUser_Password();
            User u = userRepository.findByNameAndPassword(name,password);
        } catch (NullPointerException e) {
            return false;
        }
        return true;
    }
}
