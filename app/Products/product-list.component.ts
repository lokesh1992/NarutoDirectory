import {Component,OnInit} from  'angular2/core';
import {IProduct} from './product';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ProductFilterPipe} from './product-filter.pipe';
import  {StarComponent} from '../shared/star.component';
import {ProductService} from './product.service';

@Component ({
    templateUrl:'app/Products/product-list.component.html',
    styleUrls:['app/products/product-list.component.css'],
    pipes:[ProductFilterPipe],
    directives:[StarComponent,ROUTER_DIRECTIVES]
})
export class ProductListComponent implements OnInit{
    
    pageTitle :string ='Famous Charactors';
    listFilter :string='Gaara';
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean=false;
    products : IProduct[];
    errorMessage:string;
    constructor(private _productService: ProductService){
           
    }

    toggleImage():void {
        this.showImage=!this.showImage;
    }
    ngOnInit():void{
        this._productService.getProduct()
        .subscribe(
            products=>this.products=products,
            error=>this.errorMessage=<any>error);
    
    }
    onRatingClicked(message:string):void{
        this.pageTitle="Product List:"+message;
    }
}
