/* ---------------------------------------------------------------
   Updates data — single source of truth.
   Add a new entry to the TOP of the array each day.
   Format: { date: 'YYYY-MM-DD', items: ['…', '…', '…'] }
   --------------------------------------------------------------- */
window.UPDATES = [
  {
    date: '2026-05-10',
    items: [
      'Started planning how I can add more income streams to my business and created next steps for each',
      'Wrote 1,000 words',
      'Finished and sent proposal for first digital training resource to Infinity Wellbeing & Coaching client'
    ]
  },
  {
    date: '2026-05-09',
    items: [
      'Started working on problem statement for core service',
      'Planned structure for \'framework stress test\' automation',
      'Wrote 1,000 words',
      'Continued proposal for first digital training resource for Infinity Wellbeing & Coaching client'
    ]
  },
  {
    date: '2026-05-08',
    items: [
      'Created and deployed personal website with update log functionality',
      'Created the branding system for my business website',
      'Researched git repositories and how they link to Netlify',
      'Took stock of what avenues I have in the pipeline for further work',
      'Outlined next steps for each'
    ]
  }
];

/* ---------------------------------------------------------------
   Render helpers — used by index.html and updates.html.
   --------------------------------------------------------------- */
window.UPDATES_HOME_LIMIT = 7;

window.formatUpdateDate = function (iso) {
  const d = new Date(iso + 'T00:00:00');
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const n = d.getDate();
  let suffix = 'th';
  if (n % 100 < 11 || n % 100 > 13) {
    switch (n % 10) {
      case 1: suffix = 'st'; break;
      case 2: suffix = 'nd'; break;
      case 3: suffix = 'rd'; break;
    }
  }
  return days[d.getDay()] + ' ' + n + suffix + ' ' + months[d.getMonth()] + ', ' + d.getFullYear();
};

window.renderTimeline = function (targetId, limit) {
  const target = document.getElementById(targetId);
  if (!target || !window.UPDATES) return;
  const sorted = window.UPDATES.slice().sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  const list = limit ? sorted.slice(0, limit) : sorted;
  target.innerHTML = list.map(function (entry) {
    const items = entry.items.map(function (it) {
      return '<li>' + it + '</li>';
    }).join('');
    return (
      '<li class="timeline-entry">' +
        '<div class="timeline-date">' + window.formatUpdateDate(entry.date) + '</div>' +
        '<ul class="timeline-items">' + items + '</ul>' +
      '</li>'
    );
  }).join('');
};
