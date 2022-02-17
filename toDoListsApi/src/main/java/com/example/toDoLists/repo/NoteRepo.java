package com.example.toDoLists.repo;

import com.example.toDoLists.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepo extends JpaRepository<Note, Long> {
}
