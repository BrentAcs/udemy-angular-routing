import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"],
})
export class ServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('servers.component OnInit')
    // only called when page is first loaded( ie, not reactive)
    this.route.snapshot.queryParams;
    this.route.snapshot.fragment;

    this.servers = this.serversService.getServers();
  }

  onReload(){
    // this will break, as 'servers' is now relative to this route and the
    // resulting path is /servers/servers
    //this.router.navigate(['servers'], {relativeTo: this.route});

    // this is the correct way, absolute from this route.
    this.router.navigate(["/servers"], { relativeTo: this.route });
  }
}
