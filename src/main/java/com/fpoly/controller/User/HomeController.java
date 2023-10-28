package com.fpoly.controller.User;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/") 
    public String index() {
        return "views/user/index";
    }
}