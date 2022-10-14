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
      },
      {
        name: "iPhone 14 pro max",
        description: "The best iPhone ever, version 2022, size XL - we have the iPhone 14 Pro Max. The list of novelties this year includes the notch morphing into a pill, the introduction of an Always-On display, and an all-new primary camera.",
        price: 350.50,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg"
      },
      {
        name: "iPhone 14 pro",
        description: "An improved display. Better cameras. A faster chip. This is the new iPhone. A phone that's often criticized for being behind-the-curve in certain ways, but often copied.",
        price: 310.50,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-3.jpg"
      },
      {
        name: "iPhone 14 plus",
        description: "An improved display. Better cameras. A faster chip. This is the new iPhone. A phone that's often criticized for being behind-the-curve in certain ways, but often copied.",
        price: 305.50,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-plus-3.jpg"
      },
      {
        name: "iPhone 14",
        description: "Apple loves a good 'buzzword' as much as the next company, probably even more. The trendy 'r words' arguably get the most love and attention. Words like Reduce, Reuse, Repair, Recycle. But arguably.",
        price: 300.50,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-3.jpg"
      },
      {
        name: "iPhone SE",
        description: "The Special Edition iPhone, also known as the cheapest iPhone, or the retro one, has been refreshed, and is now available for purchase. It's a very minor refresh of the phone with the same name from 2020.",
        price: 210.50,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-se-2022-0.jpg"
      },
      {
        name: "iPad air 2022",
        description: "Tela de 10,9', Wi-Fi, 64GB de Capacidade, Processador Chip M1 de Apple, Sistema Operacional iPadOS 15 e Câmera de 12MP",
        price: 360.50,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-ipad-air-2022-1.jpg"
      },
      {
        name: "iPhone 13 Pro",
        description: "The 'biggest camera update ever' on an iPhone doesn't have to come in a big iPhone, at least not a Max-sized one - the iPhone 13 Pro will do. Unlike last year, when only the 12 Pro Max got the ultimate camera system.",
        price: 290.50,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-01.jpg"
      },
      {
        name: "iPhone 13 pro max",
        description: "Not just the best iPhone ever, but also the one with the 'biggest camera update ever' - that would be this year's iPhone 13 Pro, which we have here in Max size. Joining those larger and better cameras.",
        price: 300.50,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg"
      },
      {
        name: "iPhone 13 mini",
        description: "The Apple iPhone 13 mini is the most compact flagship smartphone money can buy. It's also easy enough to outright recommend to anyone looking for this particular type of device.",
        price: 280.50,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-mini-01.jpg"
      },
      {
        name: "iPad mini 2021",
        description: "Rejoice iPad mini fans, the smallest Apple tablet has just gotten its biggest upgrade to date! There is so much new stuff - a larger screen in a smaller body, the latest A15 Bionic chip with 5G, new cameras.",
        price: 320.50,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-ipad-mini-2021-2.jpg"
      },
      {
        name: "iPad 9th gen 2021",
        description: "The 9th generation Apple iPad, also known as the iPad 10.2 (2021) is probably the Cupertino tablet that needs the least introduction. It has remained a staple of the company's lineup.",
        price: 310.50,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-ipad-102-2021-1.jpg"
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};