package com.repository;

import com.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * @Author: ZhangOcean
 * @Description:
 * @Date: Created in 19:36 2017/11/26
 */
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query(" select u from User u where u.user_Name=:user_Name and u.user_Password=:user_Password ")
    User findByNameAndPassword(@Param("user_Name") String name,@Param("user_Password") String password);

}
