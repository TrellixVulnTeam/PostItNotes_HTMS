package com.example.toDoLists.service;

import com.example.toDoLists.exception.NotFoundException;
import com.example.toDoLists.model.Note;
import com.example.toDoLists.repo.NoteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {
    private final NoteRepo noteRepo;

    @Autowired
    public NoteService(NoteRepo noteRepo) {
        this.noteRepo = noteRepo;
    }

    public Note saveNote(Note note) {
        return noteRepo.save(note);
    }

    public void deleteNoteById(Long id) {
        noteRepo.deleteById(id);
    }

    public List<Note> findAllNotes() {
        return noteRepo.findAll();
    }

    public Note findNoteById(Long id) {
        return noteRepo.findById(id)
                .orElseThrow(() -> new NotFoundException("Note with id: " + id + " not found."));
    }
}
