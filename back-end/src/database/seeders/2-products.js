module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('products', [
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
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};