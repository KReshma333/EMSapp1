package com.project.eventapp.repository;

import com.project.eventapp.entity.Registration;
import com.project.eventapp.entity.User;
import com.project.eventapp.entity.Event;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RegistrationRepository extends JpaRepository<Registration, Long> {

    List<Registration> findByUser(User user);

    Optional<Registration> findByUserAndEvent(User user, Event event);

    boolean existsByUserAndEvent(User user, Event event);
}