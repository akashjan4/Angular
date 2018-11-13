import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server', // as element
   // selector: '.app-server', -> as class
   // selector: ['app-server'], -> as attribute
    templateUrl: './server.component.html',
    styleUrls: ['./server.scss']
})

export class ServerComponent implements OnInit{
    serverIp = '127.22.12.1';
    serverStatus = true;

    ngOnInit() {
    }

    isServerLive() {
        return this.serverStatus;
    }

    switchServerStatus() {
        this.serverStatus = !this.serverStatus;
    }
}
