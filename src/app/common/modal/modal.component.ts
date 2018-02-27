import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() modalClose : EventEmitter<any> = new EventEmitter<any>();

  constructor( private router : Router ) {}

  closeModal( $event ) {

  }
}
