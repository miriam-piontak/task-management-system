import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-global-button',
  imports: [],
  templateUrl: './global-button.html',
  styleUrl: './global-button.css',
})
export class GlobalButton {
[x: string]: any;
@Input() buttonText:string="לחץ כאן"

@Output() myclick = new EventEmitter();

onButtonClicked() {
    this.myclick.emit();
  }
}