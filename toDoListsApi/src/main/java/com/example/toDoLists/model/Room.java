package com.example.toDoLists.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Room implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO,
            generator="native"
    )
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    @Column(nullable = false, updatable = false)
    private Long id;
    private String roomKey;

    public Room() {
    }

    public Room(Long id, String roomKey) {
        this.id = id;
        this.roomKey = roomKey;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRoomKey() {
        return roomKey;
    }

    public void setRoomKey(String roomKey) {
        this.roomKey = roomKey;
    }
}
