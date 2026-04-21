package com.project.eventapp.controller;

import com.project.eventapp.entity.Event;
import com.project.eventapp.service.EventService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
@CrossOrigin(origins = "*")
public class EventController {

    @Autowired
    private EventService eventService;

    // GET ALL EVENTS
    @GetMapping
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    // OPTIONAL (for testing)
    @PostMapping("/create")
    public Event createEvent(@RequestBody Event event) {
        return eventService.createEvent(event);
    }
}