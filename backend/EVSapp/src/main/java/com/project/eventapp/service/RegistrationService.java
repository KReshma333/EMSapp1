package com.project.eventapp.service;

import com.project.eventapp.entity.Event;
import com.project.eventapp.entity.Registration;
import com.project.eventapp.entity.User;
import com.project.eventapp.repository.EventRepository;
import com.project.eventapp.repository.RegistrationRepository;
import com.project.eventapp.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository registrationRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EventRepository eventRepository;

    // REGISTER USER TO EVENT
 // REGISTER USER TO EVENT
    public Registration registerUser(Long userId, Long eventId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        // ❗ Prevent duplicate registration
        if (registrationRepository.existsByUserAndEvent(user, event)) {
            throw new RuntimeException("User already registered for this event");
        }

        // ❗ Check event capacity
        if (event.getRegisteredCount() >= event.getCapacity()) {
            throw new RuntimeException("Event is full");
        }

        // ✅ Create registration
        Registration registration = new Registration();
        registration.setUser(user);
        registration.setEvent(event);

        // ✅ Increase registered count
        event.setRegisteredCount(event.getRegisteredCount() + 1);
        eventRepository.save(event);

        // ✅ Save registration
        return registrationRepository.save(registration);
    }

    // GET USER EVENTS
    public List<Registration> getUserRegistrations(Long userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return registrationRepository.findByUser(user);
    }

    // CANCEL REGISTRATION (optional but strong feature)
 // CANCEL REGISTRATION
    public String cancelRegistration(Long userId, Long eventId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        Registration reg = registrationRepository.findByUserAndEvent(user, event)
                .orElseThrow(() -> new RuntimeException("Registration not found"));

        if ("CANCELLED".equals(reg.getStatus())) {
            return "Already cancelled";
        }

        reg.setStatus("CANCELLED");
        registrationRepository.save(reg);

        // 🔥 Decrease count safely
        if (event.getRegisteredCount() > 0) {
            event.setRegisteredCount(event.getRegisteredCount() - 1);
            eventRepository.save(event);
        }

        return "Registration cancelled successfully";
    }
}