import { Component, OnInit } from '@angular/core';
import { Room } from './room';
import { RoomService } from './room.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Note } from 'src/app/note';
import { NoteService } from 'src/app/note.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public rooms!: Room[];
  public notes!: Note[];
  public notesToShow!: Note[];
  public curRoom = -1;
  public curRoomKey?: string;
  constructor(private roomService: RoomService,private noteService: NoteService){}

  ngOnInit(){

    this.getRooms();
    this.getNotes();

  }


    public getRooms(): void{
      this.roomService.getRooms().subscribe(
        (response: Room[]) =>{
          this.rooms = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    public getJsonObject(room: Room): string{
      return this.roomService.toJson(room);

    }

    public getNotes(): void{
      this.noteService.getNotes().subscribe(
        (response: Note[]) =>{
          this.notes = response;
          this.onChangeRoom(this.curRoom);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    public onAddNote(addForm: NgForm): void {
      const form =  document.getElementById('add-note-form');
      const button = document.getElementById("close-add-form");
      if(form !== null){
        form.click();
      }
    this.noteService.addNote(  this.formToJson(addForm)).subscribe(
      (response: Note) => {
        console.log(response);
        this.getNotes();
        addForm.reset();
        if(button!==null)
          button.click();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }


    public onChangeRoom(idn: number):void {
       this.curRoom=idn;
       this.notesToShow= this.notes.filter(note=> note.roomId.id == idn);
       this.curRoomKey=this.notesToShow[0].roomId.roomKey;
       document.getElementById('close-changeRoom-button')?.click();
    }

    public formToJson(addForm: NgForm): Note{
      var newNote = "{\"text\":\""+addForm.value.text+"\",\"color\":\""+addForm.value.color+"\",\"roomId\":{\"id\": "+addForm.value.roomId+"}}";
      console.log(newNote);
      return JSON.parse(newNote);
    }

}
