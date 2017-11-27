package com.Controller;

import com.Dao.UserRepository;
import com.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * @Author: ZhangOcean
 * @Description: 处理注册页面
 * @Date: Created in 20:51 2017/11/26
 */
@Controller
public class RegisterController {

    @Autowired
    UserRepository userRepository;

    @RequestMapping("/doRegister")
    public String register(HttpServletRequest request, Model model) {

        String name = request.getParameter("name1");
        String password = request.getParameter("password1");

        User user = new User(name, password);

        userRepository.save(user);

        model.addAttribute("user",user);

        return "successRegister";
    }

}
