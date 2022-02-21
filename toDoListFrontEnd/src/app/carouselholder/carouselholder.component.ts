import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Note } from 'src/app/note';
import { NoteService } from 'src/app/note.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-carouselholder',
  templateUrl: './carouselholder.component.html',
  styleUrls: ['./carouselholder.component.css']
})
export class CarouselholderComponent implements OnInit {
    public notes!: Note[];
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
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
