package com.example.internapp.Internapp.SERVICE;

import org.springframework.stereotype.Service;

@Service
public class InternService implements service{
    public boolean authenticate(String username, String password){
        if("validUsername".equals(username) && "validPassword".equals(password)){
            return true;
        }
        return false;
    }
}
