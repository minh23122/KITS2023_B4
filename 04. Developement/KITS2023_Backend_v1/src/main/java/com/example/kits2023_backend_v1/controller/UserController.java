package com.example.kits2023_backend_v1.controller;

import com.example.kits2023_backend_v1.model.User;
import com.example.kits2023_backend_v1.response.GenericApiResponse;
import com.example.kits2023_backend_v1.service.UserSerVice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")

public class UserController {
    @Autowired
    public UserSerVice userSerVice;
    @PutMapping("/{id}")
    public User changeAvatar(@PathVariable int id, @RequestParam String avatar){
        return userSerVice.changeAvatar(id, avatar);
    }
    @PutMapping("/changePassword/{id}")
    public ResponseEntity<GenericApiResponse<User>> changePassWord(@PathVariable int id,@RequestParam String newPassWord){
        return userSerVice.changePassword(id,newPassWord);
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> checkPassword(@PathVariable int id,@RequestParam String password){
        return userSerVice.checkPassword(id,password);
    }


}
