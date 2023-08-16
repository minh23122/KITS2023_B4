package com.example.kits2023_backend_v1.service;


import com.example.kits2023_backend_v1.model.User;
import com.example.kits2023_backend_v1.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserSerVice {
    @Autowired
    private UserRepository userRepository;
    public User register(User user){
        Optional<User> user1=userRepository.findByUsername(user.getUsername());
        if(user1.isPresent()) return null;
        Optional<User> user2=userRepository.findByEmail(user.getEmail());
        if(user2.isPresent()) return null;
        return userRepository.save(user);
    }
    public User changePassword(String username, String password){
        Optional<User> user1=userRepository.findByUsername(username);
        if(user1.isPresent()){
            User user=user1.get();
            user.setPassword(password);
            return userRepository.save(user);
        }
        return null;
    }
}
