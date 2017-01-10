import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StarsComponent} from './stars/stars.component';
import {EditorComponent} from "./editor/editor.component";
import {CKEditorModule} from "ng2-ckeditor";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule
  ],
  declarations: [StarsComponent, EditorComponent],
  exports: [StarsComponent, EditorComponent]
})
export class ComponentsModule {
}
