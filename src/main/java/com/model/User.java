package com.model;

import javax.persistence.*;
import javax.transaction.Transactional;

/**
 * @Author: ZhangOcean
 * @Description: 用户账户、密码
 * @Date: Created in 17:47 2017/11/24
 */
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue
    private int id;

    @Column(name = "user_Name")
    private String user_Name;

    @Column(name = "user_Password")
    private String user_Password;

    public User() {
    }

    public User(String user_Name, String user_Password) {
        this.user_Name = user_Name;
        this.user_Password = user_Password;
    }

    public String getUser_Name() {
        return user_Name;
    }

    public void setUser_Name(String user_Name) {
        this.user_Name = user_Name;
    }

    public String getUser_Password() {
        return user_Password;
    }

    public void setUser_Password(String user_Password) {
        this.user_Password = user_Password;
    }

    @Transactional
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
