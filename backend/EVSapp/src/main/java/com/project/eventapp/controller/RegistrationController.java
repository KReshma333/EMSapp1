package com.project.eventapp.controller;

import com.project.eventapp.entity.Registration;
import com.project.eventapp.service.RegistrationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/registrations")
@CrossOrigin(origins = "*")
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    // REGISTER
    @PostMapping("/register")
    public Registration register(
            @RequestParam Long userId,
            @RequestParam Long eventId) {

        return registrationService.registerUser(userId, eventId);
    }

    // GET USER EVENTS
    @GetMapping("/user/{userId}")
    public List<Registration> getUserRegistrations(@PathVariable Long userId) {
        return registrationService.getUserRegistrations(userId);
    }

    // CANCEL
    @DeleteMapping("/cancel")
    public String cancel(
            @RequestParam Long userId,
            @RequestParam Long eventId) {

        return registrationService.cancelRegistration(userId, eventId);
    }
}