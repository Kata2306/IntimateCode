package com.IntimateCode.backend.controller;

import com.IntimateCode.backend.model.classes.Enduser;
import com.IntimateCode.backend.service.EnduserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("users")
public class EnduserController {

    private final EnduserService enduserService;

    public EnduserController(EnduserService enduserService) {
        this.enduserService = enduserService;
    }

    @GetMapping
    public List<Enduser> getAllUsers (){
        return enduserService.getAllUsers();
    }

    @PostMapping
    public  Enduser addNewUser(@RequestBody Enduser enduser){
        return enduserService.postNewUser(enduser);
    }
}
