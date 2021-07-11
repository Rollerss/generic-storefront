export interface MerchandiseItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export class Merchandise implements MerchandiseItem {
  constructor(
    public id,
    public name,
    public description,
    public price,
    public imageUrl
  ) {}

  public usPrice() {
    return this.price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
}
