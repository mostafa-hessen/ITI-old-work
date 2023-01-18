import { Component } from '@angular/core';
import productItemesFromJson from '../../assets/productes.json'
import {Productes} from'../interfaces/productes'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
     arrayOfProduct: Productes[]= productItemesFromJson 
 

}
