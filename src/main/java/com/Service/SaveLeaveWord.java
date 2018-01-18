package com.Service;

import com.model.LeaveWord;
import com.repository.LeaveWordRepository;
import com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author: zhangocean
 * @Date: Created in 21:31 2018/1/15
 * Describe:
 */
@Service
public class SaveLeaveWord {

    @Autowired
    LeaveWordRepository leaveWordRepository;

    public int saveLeaveWord(LeaveWord leaveWord){

        try {
            leaveWordRepository.save(leaveWord);
            return 0;
        }catch (Exception e){
            return 1;
        }
    }

}
