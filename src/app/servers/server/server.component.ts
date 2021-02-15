import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { ActivatedRoute, Params } from "@angular/router";

import { ServersService } from "../servers.service";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    console.log("server.component OnInit");
    // only called when page is first loaded( ie, not reactive)
    const id = this.route.snapshot.queryParams["id"];
    console.log("params: " + this.route.snapshot.queryParams);
    console.log("id:" + id);
    this.route.snapshot.fragment;

    this.server = this.serversService.getServer(id);
    this.route.params
    .subscribe(
      (params: Params) => {
        console.log('subscribe id: ' +params["id"]);
        this.serversService.getServer(params['id']);
      }
    );
  }
}
