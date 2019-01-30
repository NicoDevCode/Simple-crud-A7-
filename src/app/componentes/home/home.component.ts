import { Component, OnInit } from '@angular/core';
import { ServicesHttpService } from '../../services-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  products: any;
  constructor(private service: ServicesHttpService) {
    this.service.getSeeschweiler().subscribe(
      products => {
        this.products = products;
        console.log(products);
      }
    );
  }

  ngOnInit() {
  }

}
