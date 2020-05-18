import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http' ;
import { HttpHeaders} from '@angular/common/http' ;
import { Observable } from 'rxjs' ;


@Component({
  selector: 'app-update-author-details',
  templateUrl: './update-author-details.component.html',
  styleUrls: ['./update-author-details.component.css']
})
export class UpdateAuthorDetailsComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  bookdetails = {
    id:'',
    bookname: '',
    authorName:''
  };
 
  isDataSubmitted = false;

  setValue(event) {
    const keyName = event.target.name;
    const value = event.target.value;
    this.bookdetails[keyName] = value;
  }

  submitData() {

    for(const key in this.bookdetails){
      const val = this.bookdetails[key];
      if(val.trim().length == 0){
            alert("Field cannot blank");
            return;
      }
    }
    this.isDataSubmitted=true;
    console.log(this.bookdetails);
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': "Content-Type"
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    const data = JSON.stringify(this.bookdetails);
    this.httpClient.post('http://localhost:8082/addBook',data,requestOptions
    //{
     // bookname : this.bookdetails['bookname'],
     // authorName : this.bookdetails['authorName']

    //},requestOptions
    ).subscribe(
      (data:any) => {
        
        console.log(data);
        console.log('done');
      }
    )
  }
  resetForm() {
    this.bookdetails = {
      id:'',
      bookname: '',
      authorName:''
    };
    this.isDataSubmitted=false;
  }

}
