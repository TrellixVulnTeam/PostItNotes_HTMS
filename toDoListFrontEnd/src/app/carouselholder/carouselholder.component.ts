import { Component ,Input, Output,EventEmitter,SimpleChanges} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Note } from 'src/app/note';
import { Room } from 'src/app/room';
import { NoteService } from 'src/app/note.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-carouselholder',
  templateUrl: './carouselholder.component.html',
  styleUrls: ['./carouselholder.component.css']
})
export class CarouselholderComponent   {
    @Input('notesParent') notes!: Note[];
    @Input('roomsParent') rooms!: Room[];
    @Output() getNotes = new EventEmitter<string>();
    public noteForDelete!: Note;
    public noteForUpdate!: Note;
    public curRoom=1;

  constructor(private noteService: NoteService) { }





  public onOpenNoteModal(mode:String,note:Note){
    const container = document.getElementById('button-container');
    const button = document.createElement('button');
    button.type =  'button';
    button.style.display= 'none';
    button.setAttribute('data-bs-toggle','modal')
    if(mode==='delete'){
      if(note!==null){
        this.noteForDelete = note;
      }
      button.setAttribute('data-bs-target','#deleteNoteModal')
    }
    if(mode==='update'){
      if(note!==null){
        this.noteForUpdate = note;
      }
      button.setAttribute('data-bs-target','#updateNoteModal')
    }
    if (container !== null) {
      container.appendChild(button);
      button.click();
    }
  }

  public onDeleteNote(noteId: number): void {
    const button = document.getElementById("close-delete-form");
    this.noteService.deleteNote(noteId).subscribe(
      (response: void) => {
        console.log(response);
        this.getNotes.emit();
        if(button!==null)
          button.click();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateNote(updateForm1: NgForm): void {
    const button = document.getElementById("close-update-form");
    this.noteService.updateNote(this.formToJson(updateForm1)).subscribe(
     (response: Note) => {
       console.log(response);
       this.getNotes.emit();
       if(button!==null)
         button.click();
     },
     (error: HttpErrorResponse) => {
       alert(error.message);
     }
   );
 }

 public formToJson(updateForm2: NgForm): Note{

   var newNote = "{\"id\":\""+updateForm2.value.id+"\",\"text\":\""+updateForm2.value.text+"\",\"color\":\""+updateForm2.value.color+"\",\"roomId\":{\"id\": "+updateForm2.value.roomId+"}}";
   console.log(JSON.parse(updateForm2.value.roomId));
   return JSON.parse(newNote);
 }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
