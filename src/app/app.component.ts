import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  //selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @Input() widgetName = '';
  @Output() widgetEvent = new EventEmitter<string>();
  public message = ''

  constructor(
    private element: ElementRef,
    private changeDetectorRef: ChangeDetectorRef
  ) {

  }
  ngAfterViewInit(): void {
    this.initWidgetMethod();
  }

  widgetMethod(message: string) {
    this.message = message;
    this.changeDetectorRef.detectChanges();
  }

  initWidgetMethod() {
    this.element.nativeElement.widgetMethod = (message: string) => this.widgetMethod(message);
  }

  handleCtrlClick(): void {
    this.widgetEvent.emit('Message from widget')
  }

}
