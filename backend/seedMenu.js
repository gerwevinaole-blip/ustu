const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./ustukan.db');

const menu = [
  {name:'Куурдак с картофелем', price:595, category:'Горячие блюда', branch_id:1},
  {name:'Манты', price:355, category:'Горячие блюда', branch_id:1},
  {name:'Борсооки', price:130, category:'Гарниры', branch_id:1},
  {name:'Coca-Cola', price:190, category:'Напитки', branch_id:1},
  // сюда добавляем все блюда с Яндекс меню
];

db.serialize(()=>{
  menu.forEach(item=>{
    db.run('INSERT INTO menu (name,price,category,branch_id) VALUES (?,?,?,?)',
      [item.name,item.price,item.category,item.branch_id]);
  });
});

console.log('✅ Menu seeded');
