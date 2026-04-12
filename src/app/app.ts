import { Component, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Table } from "./components/table/table";
import { Modal } from "./components/modal/modal";
import { AddProduct } from './components/add-product/add-product';

@Component({
  selector: 'app-root',
  imports: [Navbar, Table, AddProduct, Modal],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('listapp');
}
