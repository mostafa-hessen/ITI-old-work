import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-card-ofproductes',
  templateUrl: './card-ofproductes.component.html',
  styleUrls: ['./card-ofproductes.component.css']
})
export class CardOFProductesComponent {
@Input()item:any
}
