import { Component, OnInit, ViewChild, EmitType } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('confirmDialog')
    public confirmDialog: DialogComponent;
    public confirmHeader: string = 'Delete Multiple Items';
    public confirmCloseIcon: Boolean = true;
    public confirmWidth: string = '400px';
    public animationSettings: Object = { effect: 'None' };
    public target: string = '.control-section';

    public confirmDlgBtnClick: EmitType<object> = () => {
        this.confirmDialog.hide();
    }

    public confirmDlgButtons: Object[] = [{ click: this.confirmDlgBtnClick.bind(this), buttonModel: { content: 'Yes',     isPrimary: true } }, { click: this.confirmDlgBtnClick.bind(this), buttonModel: { content: 'No' } }];

    // While clicking confirm button, open the confirm Dialog
    public confirmBtnClick: EmitType<object> = () => {
        this.confirmDialog.show();
    }
 }
