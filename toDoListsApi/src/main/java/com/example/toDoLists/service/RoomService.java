package com.example.toDoLists.service;

import com.example.toDoLists.exception.NotFoundException;
import com.example.toDoLists.model.Room;
import com.example.toDoLists.repo.RoomRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {
    private final RoomRepo roomRepo;

    @Autowired
    public RoomService(RoomRepo roomRepo) {
        this.roomRepo = roomRepo;
    }

    public Room saveRoom(Room room) {
        return roomRepo.save(room);
    }

    public void deleteRoomById(Long id) {
        roomRepo.deleteById(id);
    }

    public List<Room> findAllRooms() {
        return roomRepo.findAll();
    }

    public Room findRoomById(Long id) {
        return roomRepo.findById(id)
                .orElseThrow(() -> new NotFoundException("Room with id:" + id + " not found."));
    }
}
