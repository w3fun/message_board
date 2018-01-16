package com.component;

import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author: zhangocean
 * @Date: Created in 17:13 2018/1/15
 * Describe:
 */
@Component
public class CheckCode {

    public int checkCode(HttpServletRequest request,String userCode){

        String trueCode = (String) request.getSession().getAttribute(com.google.code.kaptcha.Constants.KAPTCHA_SESSION_KEY);

        System.out.println("正确的验证码:" + trueCode);
        System.out.println("瓜皮你输入的验证码:" + userCode);
        if(trueCode.toUpperCase().equals(userCode.toUpperCase())){
            return 0;
        }
        return 1;
    }



}
