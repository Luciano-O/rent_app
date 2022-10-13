module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('products', [
      {
        name: "iPhone 13",
        description: "Tela de 6,1, 5G + Wi-Fi, 128GB de Capacidade, Processador A14 Bionic, Sistema Operacional iOS e Câmera Frontal com 12MP. iPhone 12. 5G para baixar filmes de onde estiver e fazer streaming de vídeo em alta qualidade",
        price: 278.50,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg"
      },
      {
        name: "iPhone 12",
        description: "Tela de 6,1, 5G + Wi-Fi, 128GB de Capacidade, Processador A14 Bionic, Sistema Operacional iOS e Câmera Frontal com 12MP. iPhone 12. 5G para baixar filmes de onde estiver e fazer streaming de vídeo em alta qualidade",
        price: 218.50,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg"
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};