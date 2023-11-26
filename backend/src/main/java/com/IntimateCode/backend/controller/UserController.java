package com.IntimateCode.backend.controller;

import com.IntimateCode.backend.model.classes.ApplicationUser;
import com.IntimateCode.backend.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping("/all")
    public List<ApplicationUser> getAllUsers() {
        return userService.getAllUsers();
    }


    @GetMapping("/all/{id}")
    public ApplicationUser getSingleUser(@PathVariable Long id) {
        return userService.getSingleUser(id);
    }

    @GetMapping("/")
    public String helloUserController(){
        return "User access level";
    }

}
