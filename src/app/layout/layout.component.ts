import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /**
   * @param event {Event} 事件
   * @param scrollContainer {Object} 容器dom
   */
  // onActivate(event, scrollContainer) {
  //   scrollContainer.scrollTop = 0;
  // }
}
