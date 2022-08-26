import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-writting',
  templateUrl: './writting.component.html',
  styleUrls: ['./writting.component.css']
})
export class WrittingComponent implements OnInit {
  safeURL
  constructor(private http:HttpClient,private sanitizer: DomSanitizer) { 
    let videoURL = "https://www.youtube.com/watch?v=1KT2asqA1J8";
   this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(videoURL);
  }

  ngOnInit(): void {
  }

}
