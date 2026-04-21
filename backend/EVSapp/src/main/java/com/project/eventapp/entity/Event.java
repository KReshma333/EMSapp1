package com.project.eventapp.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "events")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, length = 1000)
    private String description;

    @Column(nullable = false)
    private String location;

    @Column(nullable = false)
    private LocalDateTime eventDate;

    @Column(nullable = false)
    private String status; // UPCOMING / ONGOING / COMPLETED

    @Column(nullable = false)
    private int capacity;

    @Column(nullable = false)
    private int registeredCount;

    // Automatically set default values
    @PrePersist
    protected void onCreate() {
        this.status = "UPCOMING";
        this.registeredCount = 0;
    }

    // Getters & Setters

    public Long getId() { return id; }

    public String getTitle() { return title; }

    public String getDescription() { return description; }

    public String getLocation() { return location; }

    public LocalDateTime getEventDate() { return eventDate; }

    public String getStatus() { return status; }

    public int getCapacity() { return capacity; }

    public int getRegisteredCount() { return registeredCount; }

    public void setId(Long id) { this.id = id; }

    public void setTitle(String title) { this.title = title; }

    public void setDescription(String description) { this.description = description; }

    public void setLocation(String location) { this.location = location; }

    public void setEventDate(LocalDateTime eventDate) { this.eventDate = eventDate; }

    public void setStatus(String status) { this.status = status; }

    public void setCapacity(int capacity) { this.capacity = capacity; }

    public void setRegisteredCount(int registeredCount) { this.registeredCount = registeredCount; }
}