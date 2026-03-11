// Mock data — thay bằng DB sau
const products = [
  { id: 1, name: 'Product One',   price: '14.00', image: 'images/templatemo_image_01.jpg', desc: 'Aliquam tristique lacus in sapien. Suspendisse potenti.' },
  { id: 2, name: 'Product Title', price: '18.00', image: 'images/templatemo_image_02.jpg', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing.' },
  { id: 3, name: 'Product Title', price: '26.00', image: 'images/templatemo_image_03.jpg', desc: 'Suspendisse potenti. Ut sed pede. Nullam vitae tellus.' },
];

exports.home = (req, res) => {
  res.render('index', {
    currentPage: 'home',
    cartCount: 3,
    products,
  });
};

exports.shop = (req, res) => {
  res.render('shop', {
    currentPage: 'shop',
    cartCount: 3,
    products,
  });
};

exports.about = (req, res) => {
  res.render('about', {
    currentPage: 'about',
    cartCount: 3,
  });
};

exports.contact = (req, res) => {
  res.render('contact', {
    currentPage: 'contact',
    cartCount: 3,
  });
};

exports.cart = (req, res) => {
  res.render('cart', {
    currentPage: 'cart',
    cartCount: 3,
    cartItems: [
      { product: products[0], qty: 2 },
      { product: products[1], qty: 1 },
    ],
  });
};

exports.gallery = (req, res) => {
  res.render('gallery', {
    currentPage: 'gallery',
    cartCount: 3,
    title: 'Gallery',
  });
};
