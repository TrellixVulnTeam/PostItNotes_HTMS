import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { NoteService } from './note.service';
import { Room } from './room';
import { RoomService } from './room.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public rooms!: Room[];
  public notes!: Note[];

  constructor(private noteService: NoteService,private roomService: RoomService){}

  ngOnInit(){

    this.getRooms();
    this.getNotes();
  }
    public getNotes(): void{
      this.noteService.getNotes().subscribe(
        (response: Note[]) =>{
          this.notes = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
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


}
