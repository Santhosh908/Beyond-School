import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filepath:any=[]
  array:any=[]
  safeURL
  constructor(private http:HttpClient,private sanitizer: DomSanitizer) { 
    let videoURL = "https://www.youtube.com/watch?v=1KT2asqA1J8";
   this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(videoURL);
  }
  // sanitizeVideoUrl() {
  //   return this.sanitizer.bypassSecurityTrustHtml(this.news.embeddedVideoHtml)
  // }
  ngOnInit(): void {
    this.http.get("http://localhost:3000/uploadedfiles").subscribe((data)=>{
      this.array=data
      for(let i=0;i<this.array.length;i++){
      this.filepath.push(this.array[i].filepath)
      }
      console.log(this.filepath)
    })
  }

}
