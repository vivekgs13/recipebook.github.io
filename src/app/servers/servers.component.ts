import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `<app-server></app-server>
  //            <app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus="No server was created";
  serverName='New One';
  constructor() {
    
      setTimeout(()=>{
        this.allowNewServer=true;
      },5000);
      
   }

  ngOnInit(): void {
  }
onCreateServer(){
 this.serverCreationStatus="Server was created";
}
onUpdatedServerName(event:any){
 //console.log(event);
 this.serverName=(<HTMLInputElement>event.target).value;
}
}
