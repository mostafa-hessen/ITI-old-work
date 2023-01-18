import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import productItemesFromJson from '../../assets/productes.json'
import {Productes} from'../interfaces/productes'
@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.css']
})
export class ProductDetailesComponent {
  productDetails: Productes |any={
    createdAt:"",
    name:"",
    image:"",
    description:"",
    rate:0,
    count:0,
    price:"",
    reviews:[],
    id:""
  } 

  constructor(private myroute : ActivatedRoute ){}
  ngOnInit(){

this.productDetails= productItemesFromJson.find((ele)=>{
return  ele.id== this.myroute.snapshot.params["id"]
})

console.log(   this.productDetails);

}
}
