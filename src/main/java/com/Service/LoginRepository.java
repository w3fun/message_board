package com.Service;

import com.model.User;
import com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author: zhangocean
 * @Date: Created in 11:33 2018/1/18
 * Describe:
 */
@Service
public class LoginRepository {

    @Autowired
    UserRepository userRepository;

    public int checkUser(User user){

        List<User> list = userRepository.findAll();
        for(User u : list){
            if(user.getUser_Name().equals(u.getUser_Name()) && user.getUser_Password().equals(u.getUser_Password())){
                return 0;
            }
        }
        return 1;

    }


}
