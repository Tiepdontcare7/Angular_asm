interface IResponse {
  message: string;
  data: IProduct[]
}

interface IProduct {
  _id?: string;
  name: string;
  price: number;
  desc: string;
  img: string;
  categoryId?: string;
}
