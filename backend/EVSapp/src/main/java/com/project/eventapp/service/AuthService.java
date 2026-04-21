package com.project.eventapp.service;

import com.project.eventapp.entity.User;
import com.project.eventapp.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    // SIGNUP
    public User signup(User user) {

        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already registered");
        }

        return userRepository.save(user);
    }

    // LOGIN
    public User login(String email, String password) {
    	System.out.println("Entered email: " + email);

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not registered"));

        if (!user.getPassword().trim().equals(password.trim())) {
            throw new RuntimeException("Incorrect password");
        }

        return user;
    }
}