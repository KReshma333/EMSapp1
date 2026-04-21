package com.project.eventapp.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "registrations", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"user_id", "event_id"})
})
public class Registration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Many registrations belong to one user
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // Many registrations belong to one event
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "event_id", nullable = false)
    private Event event;

    // Track when user registered
    @Column(nullable = false)
    private LocalDateTime registeredAt;

    // Status (optional but professional)
    @Column(nullable = false)
    private String status; // REGISTERED / CANCELLED

    // Auto set timestamp
    @PrePersist
    protected void onCreate() {
        this.registeredAt = LocalDateTime.now();
        this.status = "REGISTERED";
    }

    public Long getId() { return id; }

    public User getUser() { return user; }

    public Event getEvent() { return event; }

    public LocalDateTime getRegisteredAt() { return registeredAt; }

    public String getStatus() { return status; }

    public void setId(Long id) { this.id = id; }

    public void setUser(User user) { this.user = user; }

    public void setEvent(Event event) { this.event = event; }

    public void setRegisteredAt(LocalDateTime registeredAt) { this.registeredAt = registeredAt; }

    public void setStatus(String status) { this.status = status; }
}