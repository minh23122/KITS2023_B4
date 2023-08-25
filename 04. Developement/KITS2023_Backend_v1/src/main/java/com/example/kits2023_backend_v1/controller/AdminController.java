package com.example.kits2023_backend_v1.controller;

import com.example.kits2023_backend_v1.model.Activity;
import com.example.kits2023_backend_v1.model.Category;
import com.example.kits2023_backend_v1.model.User;
import com.example.kits2023_backend_v1.repository.ActivityRepository;
import com.example.kits2023_backend_v1.repository.CategoryRepository;
import com.example.kits2023_backend_v1.repository.UserRepository;
import com.example.kits2023_backend_v1.response.GenericApiResponse;
import com.example.kits2023_backend_v1.service.UserSerVice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/admin")

public class AdminController {
    @Autowired
    UserSerVice userSerVice;
    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    ActivityRepository activityRepository;
    @GetMapping("/users")
    public ResponseEntity<List<User>> findAllUser(){
        List<User> userList = userSerVice.getAllUser();
        return ResponseEntity.ok(userList);
    }
    @GetMapping("/{id}")
    public ResponseEntity<User> findUserById(@PathVariable int id){
       Optional<User> user= userSerVice.getUserById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PutMapping("/lock/{id}")
    public ResponseEntity<GenericApiResponse<User>> lockUser(@PathVariable int id){

        return userSerVice.lockUserById(id);
    }
    @PutMapping("/unlock/{id}")
    public ResponseEntity<GenericApiResponse<User>> unLockUser(@PathVariable int id){
        return userSerVice.unLockUserById(id);
    }
    @GetMapping("/count")
    public ResponseEntity<Long> countUser() {
        Long count = userSerVice.countUser();
        HttpHeaders headers = new HttpHeaders();
        return ResponseEntity.ok().headers(headers).body(count);
    }
    @GetMapping("/listUser")
    public List<User> getListUser(){
        return userSerVice.getListUser();
    }

    @PutMapping("/addRole/{id}")
    public ResponseEntity<String> addRole(@PathVariable int id,@RequestParam String role){
        return userSerVice.addRoleToUser(id,role);
    }

    @PutMapping("/removeRole/{id}")
    public ResponseEntity<String> removeRole(@PathVariable int id,@RequestParam String role){
        return userSerVice.removeRoleFromUser(id,role);
    }
    @PostMapping("/category")
    public Category insertCategory(@RequestBody Category category){
        return categoryRepository.save(category);
    }
    //    @DeleteMapping("{id}")
//    public void deleteCategory(@PathVariable int id){
//        categoryRepository.deleteById(id);
//    }
    @PostMapping("/activity/insert")
    public Activity insertActivity(@RequestBody Activity activity){
        if(activityRepository.existsById(activity.getId())) return null;
        return activityRepository.save(activity);
    }
    @PutMapping("/categoty/{id}")
    public Category updateCategory(@PathVariable int id, @RequestBody Category category){
        Category updateCategory=categoryRepository.findById(id).get();
        updateCategory.setName(category.getName());
        return categoryRepository.save(updateCategory);
    }
}
