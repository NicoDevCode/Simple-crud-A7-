import {Component, OnInit} from '@angular/core';
import {ServicesHttpService} from '../../services-http.service';
import {Producto} from './producto';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  products: any;
  id = null;
  name = null;
  color = null;
  constructor(private service: ServicesHttpService) {
    this.getProducts();
  }

  ngOnInit() {
  }

  getProducts() {
    this.service.getProducs().subscribe(
      products => {
        this.products = products;
        console.log(products);
      }
    );
  }

  getJson() {
    return {
      'name': this.name,
      'color': this.color
    };
  }

  add() {
    if (this.id) {
      this.service.updateProducs(this.id, this.getJson()).subscribe(
        (data) => {
          this.getProducts();
          this.cleanImput();
        }
      );
    } else {
      this.service.sendProducs(this.getJson()).subscribe(
        (data) => {
          console.log(data);
          this.getProducts();
          this.cleanImput();
        }
      );
    }
  }

  cleanImput() {
    this.name = null;
    this.color = null;
    this.id = null;
  }

  delete(id) {
    this.service.deleteProducs(id).subscribe(
      (data) => {
        console.log('delted');
        this.getProducts();
        this.cleanImput();
      }
    );
  }

  put(id, name, color) {
    this.name = name;
    this.color = color;
    this.id = id;
  }
}
