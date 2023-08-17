package com.example.kits2023_backend_v1.controller;

import com.example.kits2023_backend_v1.model.User;
import com.example.kits2023_backend_v1.service.UserSerVice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    public UserSerVice userSerVice;
    @PutMapping("{/id}")
    public User changeAvatar(@PathVariable int id, @RequestParam String avatar){
        return userSerVice.changeAvatar(id, avatar);
    }
}
