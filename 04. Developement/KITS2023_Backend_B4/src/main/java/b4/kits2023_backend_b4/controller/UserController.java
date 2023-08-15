package b4.kits2023_backend_b4.controller;

import b4.kits2023_backend_b4.model.User;
import b4.kits2023_backend_b4.service.UserSerVice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserSerVice userSerVice;
    @PostMapping
    public User register(@RequestBody User user){
        return userSerVice.register(user);
    }
}
