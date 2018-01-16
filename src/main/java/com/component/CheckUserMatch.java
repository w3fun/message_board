package com.component;

import com.model.User;
import com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * @author: zhangocean
 * @Date: Created in 20:59 2018/1/15
 * Describe:
 */
@Component
public class CheckUserMatch {

    @Autowired
    UserRepository userRepository;

    public int checkUserMatch(String name, String password){

        List<User> lists = userRepository.findAll();

        for(User user : lists){
            if(user.getUser_Name().equals(name) && user.getUser_Password().equals(password)){
                return 0;
            }
        }
        return 1;
    }


}
