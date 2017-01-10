import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<div class="container">
    <input id="toolbar-text" class="form-control"  placeholder="Search Images">

  <div id="image-area" class="jumbotron">
    Images go here
  </div>
</div>

  `,
})
export class AppComponent  { name = 'Sean'; }
