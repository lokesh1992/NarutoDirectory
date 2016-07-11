import {Component,OnChanges,Input,
    Output,EventEmitter} from 'angular2/core';

@Component({
    selector:'ai-star',
    templateUrl:'app/Shared/star.component.html',
    styleUrls:['app/Shared/star.component.css']
})

export class StarComponent implements OnChanges {

    @Input() rating:number;
    starWidth:number;
   @Output() ratingClicked:EventEmitter<string>=
          new EventEmitter<string>();

    ngOnChanges():void{
        this.starWidth=this.rating *86 /5;
    }
    onClick(){
        this.ratingClicked.emit(`Rating `+ this.rating +` was Clicked`);
    }
}