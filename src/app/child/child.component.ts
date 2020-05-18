import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    //@Input('list') heroes:String[];
    @Output() foodEvt : EventEmitter<string> = new EventEmitter<string>();
    @Input() item : number;
    @Output() itemChange  = new EventEmitter<number>();
    itemPrice: number = 15;
  constructor() { }

  addToFood(value){
    this.foodEvt.emit(value);
  }
  incQty(){
      this.item += 1;
      this.updateQty;
  }
  decQty(){
    this.item -= 1;
    this.updateQty;
  }
  ngOnInit(): void {
  }

  updateQty() {
         this.itemChange.emit(this.item);
  }
}
