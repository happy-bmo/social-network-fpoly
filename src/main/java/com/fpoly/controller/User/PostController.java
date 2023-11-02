package com.fpoly.controller.User;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PostController {
    @RequestMapping("/newfeed")
    public String newfeed() {
        return "views/user/post/newfeed";
    }
}
