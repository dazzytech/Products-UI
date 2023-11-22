import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, Category } from '../../model/product';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatChipsModule } from '@angular/material/chips';

export interface DialogData {
  description: string;
  canExpire: Boolean;
  expiry?: Date;
  category: Category;
  price: Number;
  special: Boolean;
}


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  

  @Input("products") 
  public products: Product[] = [];

  @Output("productsChange")
  public productChange = new EventEmitter<Product[]>();

  Category = Category;

  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {

  }

  getSpecial(special: Boolean): String {
    if(special) {
      return "Yes";
    } else {
      return "No";
    }
  }

  addNewProduct() {
    const dialogRef = this.dialog.open(ProductDialog, {
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.products.push(result);
    });
  }

  editProduct(product:Product) {
    const dialogRef = this.dialog.open(ProductDialog, {
      width: '350px',
      data: {
        description: product.description,
        canExpire:  product.expiry != null,
        expiry: product.expiry,
        category: product.category,
        price: product.price,
        special: product.special
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        const index = this.products.indexOf(product, 0);
        if (index > -1) {
          this.products[index] = result;
        }
      }
    });
  }

  deleteProduct(product:Product) {
    const index = this.products.indexOf(product, 0);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }
}

@Component({
  selector: 'product-dialog',
  templateUrl: './product-dialog.html',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule]
})
export class ProductDialog {

  constructor(
    public dialogRef: MatDialogRef<ProductDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}