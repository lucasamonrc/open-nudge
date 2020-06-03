exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {      
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 'id001', 
          name: 'Open Nudge',
          email: 'contact@opennudge.com',
          phone: '+1 (000) 000-0000',
          city: 'Salt Lake City',
          state: 'UT',
          org_flag: true
        },
        {
          id: 'id002',
          name: 'Lucas Castro',
          email: 'lucasamonrc@gmail.com',
          phone: '+1 (385) 295-0754',
          city: 'Holladay',
          state: 'UT',
          org_flag: false
        },
        {
          id: 'id003',
          name: 'Jane Doe',
          email: 'jndoe@email.com',
          phone: '+1 (000) 000-0000',
          city: 'Mountain View',
          state: 'CA',
          org_flag: false
        },
        {
          id: 'id004',
          name: 'Ass. Pe. Seconelo',
          email: 'contact@seconelo.org',
          phone: '+1 (000) 000-0000',
          city: 'Austin',
          state: 'TX',
          org_flag: true
        }
      ]);
    });
};
