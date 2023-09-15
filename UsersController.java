package com.example.internapp.Internapp.CONTROL;

import com.example.internapp.Internapp.MODEL.Users;
import com.example.internapp.Internapp.REPO.UserRepository;
//import io.swagger.v3.oas.annotations.parameters.RequestBody;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin ("*")
@RestController
@RequestMapping("/users")
public class UsersController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public Users CreateUsers(@RequestBody Users users){
        return userRepository.save(users);
    }

    @GetMapping
    public List<Users> GetallUsers(){
        return userRepository.findAll();
    }
}
