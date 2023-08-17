package com.example.kits2023_backend_v1.service;


import com.example.kits2023_backend_v1.model.ERole;
import com.example.kits2023_backend_v1.model.Role;
import com.example.kits2023_backend_v1.model.User;
import com.example.kits2023_backend_v1.repository.RoleRepository;
import com.example.kits2023_backend_v1.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserSerVice {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
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


    public List<User> getAllUser(){
        return userRepository.findAll();
    }
    public Optional<User> getUserById(int id){
        return userRepository.findById(id);
    }
    public ResponseEntity<String> lockUserById(int id) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setStatus(false);
            userRepository.save(user);
            return ResponseEntity.ok("User with ID " + id + " has been locked.");
        } else {
            return ResponseEntity.badRequest().body("User with ID " + id + " does not exist.");
        }
    }
    public ResponseEntity<String> unLockUserById(int id) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setStatus(true);
            userRepository.save(user);
            return ResponseEntity.ok("User with ID " + id + " has been unlocked.");
        } else {
            return ResponseEntity.badRequest().body("User with ID " + id + " does not exist.");
        }
    }

    public ResponseEntity<String> addRoleToUser(int userId, String role) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            // Kiểm tra xem quyền đã tồn tại trong danh sách quyền của người dùng chưa
            switch (role) {
                case "admin":
                    Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    if (!user.getRoles().contains(adminRole)) {
                        user.getRoles().add(adminRole);
                        userRepository.save(user);
                        return ResponseEntity.ok("Role 'admin' has been added to the user with ID: " + userId);
                    }
                    break;
                default:
                    Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    if (!user.getRoles().contains(userRole)) {
                        user.getRoles().add(userRole);
                        userRepository.save(user);
                        return ResponseEntity.ok("Role 'user' has been added to the user with ID: " + userId);
                    }
            }
            return ResponseEntity.badRequest().body("User already has the role: " + role);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    public ResponseEntity<String> removeRoleFromUser(int userId, String role) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            // Kiểm tra xem quyền đã tồn tại trong danh sách quyền của người dùng chưa
            switch (role) {
                case "admin":
                    Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    if (user.getRoles().contains(adminRole)) {
                        user.getRoles().remove(adminRole);
                        userRepository.save(user);
                        return ResponseEntity.ok("Role 'admin' has been removed from the user with ID: " + userId);
                    }
                    break;
                default:
                    Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    if (user.getRoles().contains(userRole)) {
//                        user.getRoles().remove(userRole);
//                        userRepository.save(user);
                        return ResponseEntity.ok("Role 'user' is default role you can not delete this role");
                    }
            }
            return ResponseEntity.badRequest().body("User does not have the role: " + role);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public User changeAvatar(int id, String avatar){
        Optional<User> updatedUser=userRepository.findById(id);
        if(updatedUser.isPresent()){
            User user=updatedUser.get();
            user.setAvatar(avatar);
            return userRepository.save(user);
        }
        return null;
    }
}
