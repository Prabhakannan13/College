import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }
  name=""
  rollno=""
  admission=""
  college=""
  parentname=""
  dob=""
  address=""
  mobilenumber=""
  parentnumber=""
  emailid=""
  bloodgroup=""

  readValues=()=>{
    console.log("success")
  }

  ngOnInit(): void {
  }

}
