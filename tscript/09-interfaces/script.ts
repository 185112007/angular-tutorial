interface Product{
    id: number;
    name: string;
    unitPrice: number;
}

class ProductWithClass{
    id: number;
    name: string;
    unitPrice: number;
}

function save(product: Product){
    console.log(product.id + " kaydedildi");
}

function saveClass(product: ProductWithClass){
    console.log(product.id + " kaydedildi");
}

save({id:1, name: 'laptop', unitPrice: 10000});
saveClass(new ProductWithClass());

interface PersonService{
    save();
}

class CustomerService implements PersonService{
    save() {
        console.log("saved");
    }
}