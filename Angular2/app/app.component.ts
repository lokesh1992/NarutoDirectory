
import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http'
import 'rxjs/Rx';//Load all features
import {RouteConfig,ROUTER_PROVIDERS,ROUTER_DIRECTIVES } from 'angular2/router'
import {WelcomeComponent} from './home/welcome.component';
import {ProductDetailComponent} from './products/product-details.component';


import {ProductListComponent} from './Products/product-list.component';
import {ProductService} from './Products/product.service';

@RouteConfig([
    {path:'/welcome',name:'Welcome',component:WelcomeComponent,useAsDefault:true},
        {path:'/products',name:'Products',component:ProductListComponent},
    {path:'/product/:id',name:'ProductDetails',component:ProductDetailComponent},
])
@Component ({
    selector:'pm-app',
    template:`
    <div>
           <nav class='navbar navbar-default'>
                      <div class='container-fluid'>
                           <a class='navbar-brand'></a>
                            <ul class='nav navbar-nav'>
                                    <li><a [routerLink]="['Welcome']">Home</a></li>
                                    <li><a [routerLink]="['Products']">Naruto Series Charactors </a></li>
                            </ul>
                        </div>
            </nav>
            <div class='container'>
            <router-outlet></router-outlet>
            </div>
       </div>`,
    directives: [ROUTER_DIRECTIVES],
    providers:[ProductService,HTTP_PROVIDERS,ROUTER_PROVIDERS]

 
})
export class AppComponent {
    pageTitle:string ="Product Management !";
}