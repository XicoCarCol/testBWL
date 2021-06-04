import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public title: string= 'USUARIO LOGEADO'
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute)
    {

    }


  ngOnInit(): void {
  }

  public onViewDash() {
    this.router.navigate(['/navbar/dashboard'], {relativeTo: this.activatedRoute})
  }

  public onViewPage() {
    this.router.navigate(['/navbar/pageUsuario'],  {relativeTo: this.activatedRoute})
  }

}
