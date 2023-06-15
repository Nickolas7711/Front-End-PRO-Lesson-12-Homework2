let kitchenProducts = [
    {
        category: 'kitchen',
        type: 'grater',
        price: 10
    },
    {
        category: 'kitchen',
        type: 'pastry-bag',
        price: 25
    },
    {
        category: 'kitchen',
        type: 'scale',
        price: 5
    },
    {
        category: 'kitchen',
        type: 'whisk',
        price: 15
    }
];

let devicesProducts = [
    {
        category: 'devices',
        type: 'desktop',
        price: [100, 1000]
    },
    {
        category: 'devices',
        type: 'laptop',
        price: [50, 1500]
    },
    {
        category: 'devices',
        type: 'smartphone',
        price: [80, 2000]
    },
    {
        category: 'devices',
        type: 'tablet',
        price: [20, 1300]
    }
];

let cosmeticsProducts = [
    {
        category: 'cosmetics',
        type: 'blush',
        price: 100
    },
    {
        category: 'cosmetics',
        type: 'eyeshadow',
        price: 50
    },
    {
        category: 'cosmetics',
        type: 'lipstick',
        price: 80
    },
    {
        category: 'cosmetics',
        type: 'nail-polish',
        price: 200
    },
    {
        category: 'cosmetics',
        type: 'perfume',
        price: 300
    }
];

document.write(`
<table>
	<tr>
		<th>Images</th>
		<th>Name</th>
		<th>Price</th>
	</tr>
`)

function Product(category, type, price) {
    this.category = category;
    this.type = type;
    this.price = price;
    this.renderProduct = function() {		
        return `        
            <tr>
                <td><img src="styles/images/${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
                <td>${this.type}</td>
                <td>${this.getPriceDisplay()} USD</td>            
            </tr>
        `;
    };
}

Product.prototype.getPriceDisplay = function() {
    if (Array.isArray(this.price)) {
        return `${this.price[0]} - ${this.price[1]}`;
    } else {
        return `${this.price}`;
    }
};

function renderCategorys(categorys) {
    categorys
	.map(function(item) {
        return new Product(item.category, item.type, item.price);
    })
	.forEach(function(item) {
        document.write(item.renderProduct());
    });
}

renderCategorys(kitchenProducts);
renderCategorys(devicesProducts);
renderCategorys(cosmeticsProducts);

document.write('</table>');