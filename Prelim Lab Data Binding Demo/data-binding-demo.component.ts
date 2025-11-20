import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-demo',
  imports: [FormsModule],
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.css'
})

export class DataBindingDemoComponent {
  // interpolation
  title = "Angular App"
  description = "First Angular App"

  // property binding
  imgURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzpEzJGHQzT0DD3LB0RqeXG2DMFPyaa6oUyg&s' // img
  w = 100
  h = 100
  alttxt = "Catto"

  // style binding
  txtcolor = "#72cfdb"

  // class binding
  boldHighlighted = true

}
