import { x } from "joi"

export const products = [
  {
    name: "iPhone 13",
    description: "Tela de 6,1, 5G + Wi-Fi, 128GB de Capacidade, Processador A14 Bionic, Sistema Operacional iOS e Câmera Frontal com 12MP. iPhone 12. 5G para baixar filmes de onde estiver e fazer streaming de vídeo em alta qualidade",
    price: 278.50,
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1656712888128"
  },
  {
    name: "iPhone 12",
    description: "Tela de 6,1, 5G + Wi-Fi, 128GB de Capacidade, Processador A14 Bionic, Sistema Operacional iOS e Câmera Frontal com 12MP. iPhone 12. 5G para baixar filmes de onde estiver e fazer streaming de vídeo em alta qualidade",
    price: 218.50,
    image: "https://http2.mlstatic.com/D_NQ_NP_916036-MLA46082192810_052021-O.jpg"
  }
]

export const userPayload = {
  id: 1,
  name: "Admin",
  email: "admin@admin.com",
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
  products: [
    {
      id: 1,
      name: 'iPhone 13',
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1656712888128',
      price: 278.5,
      Rents: {
        userId: 1,
        productId: 1,
        months: 2
      }
    }
  ]
}

export const basicUser = {
  id: 1,
  name: "Admin",
  email: "admin@admin.com",
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
}

export const newUser = {
  email: "oliveiraluck109@gmail.com",
  password: "lucki123",
  name: "Luciano O"
}

export const notUserLogin = {
  email: "oliveiraluck778@gmail.com",
  password: "xablau123"
}

export const validLogin = {
  email: "admin@admin.com",
  password: "secret_admin"
}

export const newRent = {
  userId: 2,
  productId: 1,
  months: 4
}