let products = [
  { id: 1, name: 'Product One',   price: 14.00, stock: 100, image: 'images/templatemo_image_01.jpg' },
  { id: 2, name: 'Product Title', price: 18.00, stock: 200, image: 'images/templatemo_image_02.jpg' },
  { id: 3, name: 'Product Title', price: 26.00, stock: 50,  image: 'images/templatemo_image_03.jpg' },
];

exports.getAll   = (req, res) => res.json({ success: true, data: products });

exports.getById  = (req, res) => {
  const item = products.find(p => p.id === +req.params.id);
  if (!item) return res.status(404).json({ success: false, message: 'Not found' });
  res.json({ success: true, data: item });
};

exports.create   = (req, res) => {
  const item = { id: products.length + 1, ...req.body };
  products.push(item);
  res.status(201).json({ success: true, data: item });
};

exports.update   = (req, res) => {
  const i = products.findIndex(p => p.id === +req.params.id);
  if (i === -1) return res.status(404).json({ success: false, message: 'Not found' });
  products[i] = { ...products[i], ...req.body };
  res.json({ success: true, data: products[i] });
};

exports.remove   = (req, res) => {
  const i = products.findIndex(p => p.id === +req.params.id);
  if (i === -1) return res.status(404).json({ success: false, message: 'Not found' });
  products.splice(i, 1);
  res.json({ success: true, message: 'Deleted' });
};

exports.search = (req, res) => {
  const { q } = req.query;
  const result = products.filter(p =>
    p.name.toLowerCase().includes((q || '').toLowerCase())
  );
  res.json({ success: true, data: result });
};