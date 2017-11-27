package com.Controller;

import com.Dao.UserRepository;
import com.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import java.util.List;

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
            if(u.equals(null)) {
                return false;
            }
        } catch (NullPointerException e) {
            return false;
        }
        return true;
    }
}
