import { Component, OnInit } from '@angular/core';
import { Room } from './room';
import { RoomService } from './room.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public rooms!: Room[];


  constructor(private roomService: RoomService){}

  ngOnInit(){

    this.getRooms();

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
