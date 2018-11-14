import { Component, OnInit } from '@angular/core';

interface IMyServerList {
    name: string;
    location: string;
    ip: string;
    port: number;
}

@Component({
    selector: 'app-server', // as element
    // selector: '.app-server', -> as class
    // selector: ['app-server'], -> as attribute
    templateUrl: './server.component.html',
    styleUrls: ['./server.scss']
})

export class ServerComponent implements OnInit, IMyServerList {
    serverIp = '127.22.12.1';
    serverStatus = true;
    serverList: IMyServerList[];
    name: string;
    location: string;
    ip: string;
    port: number;

    ngOnInit() {
        this.serverList = [
            {
                name: 'Fk-4554-001',
                location: 'Florida',
                ip: '127.40.234.1',
                port: 2365,
            },
            {
                name: 'IG-8454-242',
                location: 'London',
                ip: '127.90.24.111',
                port: 1165,
            },
            {
                name: 'LP-4421-211',
                location: 'Jhuan',
                ip: '112.40.12.167',
                port: 2981,
            },
            {
                name: 'JK-234-871',
                location: 'Pune',
                ip: '141.87.39.229',
                port: 8428,
            }
        ];
    }

    isServerLive() {
        return this.serverStatus;
    }

    switchServerStatus() {
        this.serverStatus = Math.random() > 0.5 ? true : false;
    }
}
