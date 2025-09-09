import { rest } from 'msw';
const lawyers = [
{ id:1, name:'Jane Doe, Advocate', area:'Family Law', city:'Mumbai', exp:12, fee:999, rating:4.9, img:'/media/lawyer1.jpg' },
{ id:2, name:'Rahul Mehta, Adv.', area:'Corporate', city:'Bengaluru', exp:9, fee:1499, rating:4.8, img:'/media/lawyer2.jpg' },
{ id:3, name:'Sara Khan, Adv.', area:'Criminal', city:'Delhi', exp:7, fee:899, rating:4.7, img:'/media/lawyer3.jpg' },
];
export const handlers = [
rest.get('/api/lawyers', (req, res, ctx) => {
const q = (req.url.searchParams.get('q') || '').toLowerCase();
const area = req.url.searchParams.get('area') || '';
const city = req.url.searchParams.get('city') || '';
const filtered = lawyers.filter(l =>
(!q || (l.name + ' ' + l.area + ' ' + l.city).toLowerCase().includes(q)) &&
(!area || l.area === area) &&
(!city || l.city === city)
);
return res(ctx.status(200), ctx.json({ data: filtered, meta: { total: filtered.length } }));
}),
rest.get('/api/lawyers/:id', (req, res, ctx) => {
const { id } = req.params;
const found = lawyers.find(l => String(l.id) === String(id));
return res(ctx.json({ data: found || null }));
}),
];

