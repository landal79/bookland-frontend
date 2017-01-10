import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {

  @Input() elementId: string;
  @Input() content: string;
  @Output('change-content') changeContent : EventEmitter<string> = new EventEmitter();

 // editor;

  constructor() { }

  // ngAfterViewInit() {
  //   tinymce.init({
  //     selector: '#' + this.elementId,
  //     plugins: ['link', 'paste', 'table'],
  //     skin_url: 'assets/skins/lightgray',
  //     setup: editor => {
  //       this.editor = editor;
  //       editor.value = content;
  //       editor.on('keyup', () => {
  //         const content = editor.getContent();
  //         this.changeContent.emit(content);
  //       });
  //     },
  //   });
  // }
  //
  // ngOnDestroy() {
  //   tinymce.remove(this.editor);
  // }

  ngOnInit() {
  }

   onChange(event: CustomEvent) {
    console.info('content: ' + this.content);
    this.changeContent.emit(this.content);
  }

}
