const secondes = require('./secondes');

let an2000 = new Date(2000, 1, 1, 0, 0, 0 );
let dateNow = new Date(2000, 1,1,0,0,59);



test ('Nombre de seconde depuis l\'an 2000', () => {
   expect(secondes(an2000, dateNow)).tobe(59);
})