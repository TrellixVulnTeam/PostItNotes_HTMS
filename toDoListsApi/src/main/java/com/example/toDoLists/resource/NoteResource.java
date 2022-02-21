package com.example.toDoLists.resource;

import com.example.toDoLists.model.Note;
import com.example.toDoLists.service.NoteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/note")
public class NoteResource {
    private final NoteService noteService;

    public NoteResource(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Note>> getAllNotes() {
        List<Note> notes = noteService.findAllNotes();
        return new ResponseEntity<>(notes, HttpStatus.OK);
    }

    @GetMapping("/all/{id}")
    public ResponseEntity<Note> getNoteById(@PathVariable("id") Long id) {
        Note note = noteService.findNoteById(id);
        return new ResponseEntity<>(note, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Note> addNote(@RequestBody Note note) {
        Note newNote = noteService.saveNote(note);
        return new ResponseEntity<>(newNote, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Note> updateNote(@RequestBody Note note) {
        Note newNote = noteService.saveNote(note);
        return new ResponseEntity<>(newNote, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteNote(@PathVariable("id") Long id) {
        noteService.deleteNoteById(id);
        return new ResponseEntity<Note>(HttpStatus.OK);
    }

}
