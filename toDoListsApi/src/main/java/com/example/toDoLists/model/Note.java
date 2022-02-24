package com.example.toDoLists.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Note implements Serializable {
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
    private String text;
    private String color;
    @ManyToOne(targetEntity = Room.class)
    @JoinColumn(foreignKey = @ForeignKey(name = "FK_ROOM_ID"))
    private Room roomId;

    public Note() {
    }

    public Note(Long id, String text, String color, Room roomId) {
        this.id = id;
        this.text = text;
        this.color = color;
        this.roomId = roomId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Room getRoomId() {
        return roomId;
    }

    public void setRoomId(Room roomId) {
        this.roomId = roomId;
    }
}
