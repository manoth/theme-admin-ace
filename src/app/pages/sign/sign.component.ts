import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  public path: string;
  public overlay: boolean = false;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    document.body.className = 'login-layout light-login';
    this.path = this.route.snapshot.url[0].path;
  }

}
