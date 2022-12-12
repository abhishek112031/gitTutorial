const p=[];
class Product{
    constructor(title,price,des){
        this.title=title;
        this.price=price;
        this.des=des;
    }

    save(){
        p.push(this);

    }
   static print(){
        console.log(p)
    }
}
const product=new Product('book',50,'netaji');
product.save();
Product.print();