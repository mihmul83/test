import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HomePage } from './home.page';
import { BoardModule } from '../board/board.module';
import { BoardComponent } from '../board/board/board.component';

import { CookieService } from 'ngx-cookie-service';
import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgZorroAntdModule,
    BoardModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  providers: [ CookieService],
  declarations: [HomePage]
})
export class HomePageModule {}
