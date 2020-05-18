import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http' ;
import { HttpHeaders} from '@angular/common/http' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookStoreDetails';
  foods: string[] = [];
  deletedFood:string;
  data:number = 1;
  //heroList:string[] = [];
  //addHero({target}){
    //   const {value} = target;
      // this.heroList.push(value);
  //}
  afterFoodAdd(evt){
       console.log(evt);
      this.foods.push(evt);
  }
  delItem(index){
    this.deletedFood=this.foods[index];
    this.foods=this.foods.filter((val,index1) => index1 != index);
  }
  addQty(val){
            this.data=val;
  }
  showData(val){
    this.data=val;

  }
}
