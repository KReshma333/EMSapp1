package com.project.eventapp.service;

import com.project.eventapp.entity.Event;
import com.project.eventapp.repository.EventRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    // GET ALL EVENTS
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    // OPTIONAL: Add event (for testing/manual use)
    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }
}