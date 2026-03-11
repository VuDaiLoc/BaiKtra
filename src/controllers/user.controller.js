let users = [
  { id: 1, name: 'Nguyen Van A', email: 'a@example.com' },
];

exports.getAll  = (req, res) => res.json({ success: true, data: users });

exports.getById = (req, res) => {
  const u = users.find(x => x.id === +req.params.id);
  if (!u) return res.status(404).json({ success: false, message: 'Not found' });
  res.json({ success: true, data: u });
};

exports.register = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ success: false, message: 'Missing fields' });
  const u = { id: users.length + 1, name, email };
  users.push(u);
  res.status(201).json({ success: true, data: u });
};

exports.login = (req, res) => {
  const u = users.find(x => x.email === req.body.email);
  if (!u) return res.status(401).json({ success: false, message: 'Invalid credentials' });
  res.json({ success: true, data: u });
};
