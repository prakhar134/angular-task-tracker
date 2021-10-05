import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'first-app';

  showAddTask: boolean;
  subsctiption: Subscription;

  constructor(private uiService: UiService) {
    this.subsctiption = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  toggleAddTask() {
    console.log('toggle');
    this.uiService.toggleAddTask();
  }
}
