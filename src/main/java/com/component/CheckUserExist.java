package com.component;

import com.model.User;
import com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * @author: zhangocean
 * @Date: Created in 19:14 2018/1/15
 * Describe:
 */
@Component
public class CheckUserExist {

    @Autowired
    private UserRepository userRepository;

    public int checkUserExist(String name){

        List<User> lists = userRepository.findAll();

        for(User user : lists){
            if(user.getUser_Name().equals(name)){
                return 2;
            }
        }

        return 0;
    }

}
