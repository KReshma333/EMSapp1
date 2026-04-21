package com.project.eventapp.controller;

import com.project.eventapp.entity.User;
import com.project.eventapp.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private AuthService authService;

    // SIGNUP
    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        return authService.signup(user);
    }

    // LOGIN
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam String email,
                                  @RequestParam String password) {
        try {
            User user = authService.login(email, password);
            return ResponseEntity.ok(user);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}