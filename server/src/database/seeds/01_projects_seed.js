
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          title: 'Open Nudge',
          description: 'Open Nudge needs better User Experience',
          role: 'UX Designer',
          user_id: 'id001'
        },
        {
          title: 'Personal Blog',
          description: 'Looking for to build a nice and clean personal blog',
          role: 'Web Developer',
          user_id: 'id002'
        },
        {
          title: '3D Animation for new game',
          description: 'Need experts in 3D animation for a new cool educational game',
          role: '3D Animator',
          user_id: 'id003'
        },
        {
          title: 'Social Media Donation gathering',
          description: 'Need volunteers to help gather funds for this new year budget',
          role: 'Social Media Marketer',
          user_id: 'id004'
        }
      ]);
    });
};
