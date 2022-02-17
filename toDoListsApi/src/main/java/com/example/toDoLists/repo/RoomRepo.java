package com.example.toDoLists.repo;

import com.example.toDoLists.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepo extends JpaRepository<Room, Long> {

}
