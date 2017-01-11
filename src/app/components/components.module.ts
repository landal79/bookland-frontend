import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StarsComponent} from './stars/stars.component';
import {EditorComponent} from "./editor/editor.component";
import {CKEditorModule} from "ng2-ckeditor";
import {FormsModule} from "@angular/forms";
import {_404Component} from "./404-component/404";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule
  ],
  declarations: [StarsComponent, EditorComponent, _404Component],
  exports: [StarsComponent, EditorComponent, _404Component]
})
export class ComponentsModule {
}
