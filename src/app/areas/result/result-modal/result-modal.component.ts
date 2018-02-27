import { Input, Component, OnInit } from "@angular/core";

@Component({
  selector: 'result-modal',
  templateUrl: './result-modal.component.html',
  styleUrls: ['./result-modal.component.scss']
})
export class ResultModalComponent implements OnInit {

  @Input() link: string;

  constructor() {
  }

  ngOnInit() {
    console.log(this.link);
  }

}
