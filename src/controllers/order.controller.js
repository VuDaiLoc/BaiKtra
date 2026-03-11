let orders = [
  { id: 1, userId: 1, products: [{ productId: 1, qty: 2 }], status: 'pending', total: 28.00 },
];

exports.getAll      = (req, res) => res.json({ success: true, data: orders });

exports.getById     = (req, res) => {
  const o = orders.find(x => x.id === +req.params.id);
  if (!o) return res.status(404).json({ success: false, message: 'Not found' });
  res.json({ success: true, data: o });
};

exports.create      = (req, res) => {
  const o = { id: orders.length + 1, status: 'pending', ...req.body };
  orders.push(o);
  res.status(201).json({ success: true, data: o });
};

exports.updateStatus = (req, res) => {
  const o = orders.find(x => x.id === +req.params.id);
  if (!o) return res.status(404).json({ success: false, message: 'Not found' });
  o.status = req.body.status;
  res.json({ success: true, data: o });
};
