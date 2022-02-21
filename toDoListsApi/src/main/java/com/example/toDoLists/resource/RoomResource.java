package com.example.toDoLists.resource;


import com.example.toDoLists.model.Room;
import com.example.toDoLists.service.RoomService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/room")
public class RoomResource {
    private final RoomService roomService;

    public RoomResource(RoomService roomService) {
        this.roomService = roomService;
    }


    @GetMapping("/all")
    public ResponseEntity<List<Room>> getAllRooms() {
        List<Room> rooms = roomService.findAllRooms();
        return new ResponseEntity<>(rooms, HttpStatus.OK);
    }

    @GetMapping("/all/{id}")
    public ResponseEntity<Room> getRoomById(@PathVariable("id") Long id) {
        Room room = roomService.findRoomById(id);
        return new ResponseEntity<>(room, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Room> updateRoom(@RequestBody Room room) {
        Room newRoom = roomService.saveRoom(room);
        return new ResponseEntity<>(newRoom, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Room> addRoom(@RequestBody Room room) {
        Room newRoom = roomService.saveRoom(room);
        return new ResponseEntity<>(newRoom, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteRoom(@PathVariable("id") Long id) {
        roomService.deleteRoomById(id);
        return new ResponseEntity<Room>(HttpStatus.OK);
    }
}
