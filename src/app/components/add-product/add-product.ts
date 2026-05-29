import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-add-product',
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-product.html',
  styleUrl: './add-product.scss',
})
export class AddProduct {

  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(Modal);
  }

}
