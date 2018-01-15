package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Author: ZhangOcean
 * @Description: 返回到留言板首页
 * @Date: Created in 19:30 2017/11/24
 */

@Controller
public class IndexController {

    @RequestMapping("/")
    public String index() {

        return "index";
    }

}
