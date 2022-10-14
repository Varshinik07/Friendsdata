import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-friend-data',
  templateUrl: './view-friend-data.component.html',
  styleUrls: ['./view-friend-data.component.css']
})
export class ViewFriendDataComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   status:boolean=true
fetchData=()=>{
  this.myapi.viewData().subscribe(
    (data)=>{
      this.viewData=data
    }
  )
}
   

  viewData:any=[]
  ngOnInit(): void {
  }

}
