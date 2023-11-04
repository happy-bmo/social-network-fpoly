package com.fpoly.controller.User;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class InfoController {
    @RequestMapping("/info")
    public String info() {
        return "views/user/_info.html";
    }
}
