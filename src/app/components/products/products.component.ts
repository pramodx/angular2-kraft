import {Component, OnInit, Output} from "@angular/core";
import {Product} from "../../models/product";
import {ProductsService} from "../../services/products.service";
import {EventEmitter} from "@angular/compiler/src/facade/async";
@Component({
	selector: 'products',
	providers: [ProductsService],
	styleUrls: ['./app/components/products/products.component.css'],
	templateUrl: './app/components/products/products.component.html'
})
export class ProductsComponent implements OnInit {
	products:Product[];

	@Output() selectedProduct = new EventEmitter<Product>();

	constructor(private _productsService:ProductsService) {
	}

	ngOnInit() {
		this.getAllProducts();
	}

	getAllProducts() {
		this._productsService.getAllProducts().then((products) => this.products = products);
	}

	getImagePath(imgPath) {
		return './img/range/img-big-' + imgPath + '.png';
	}

	onSelectProduct(product:Product) {
		this.selectedProduct.emit(product);
	}
}