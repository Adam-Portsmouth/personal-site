/* ---------------------------------------------------------------
   Updates data — single source of truth.
   Add a new entry to the TOP of the array each day.
   Format: { date: 'YYYY-MM-DD', items: ['…', '…', '…'] }
   --------------------------------------------------------------- */
window.UPDATES = [
  {
    date: '2026-05-26',
    items: [
      'Finished creating The L&D Credibility Toolkit',
      'Reached out to network for volunteers to review Toolkit and sent to 8 people',
      'Formally initiated and prepared partnership project with <a href="https://infinitywellbeingcoaching.com/" target="_blank">Infinity Wellbeing & Coaching</a>'
    ]
  },
  {
    date: '2026-05-20',
    items: [
      'Wrote 1,000 words',
      'Finished base content of product ready for packaging',
      'Verbally agreed on new partnership with colleague. This will be a service/product based partnership to take the work we have been innovating to a wider audience/client base',
      'Outlined my (very) ambitious revenue goal for the next two business years'
    ]
  },
  {
    date: '2026-05-19',
    items: [
      'Wrote 1,000 words',
      'Wrote 2 case studies',
      'Designed and built case studies pages on my <a href="https://www.pathwaytalentdevelopment.com/" target="_blank">Pathway Talent Development</a> website',
      'Finished first draft of product documentation'
    ]
  },
  {
    date: '2026-05-18',
    items: [
      'Wrote 5,000+ words',
      'Realised I have a potentially valuable product to create that I personally would have paid for',
      'Sourced, edited, and wrote 80% of this product',
      'Created roadmap to get reviews for, validate, and monetise this product. I have a lot of faith in this product as it would have meant a lot to me personally earlier on in my career. I think that emotional attatchment there is valuable',
      'Outlined 2 case studies'
    ]
  },
  {
    date: '2026-05-15',
    items: [
      'Wrote 1,000 words',
      'Continued writing my white paper',
      'Built hero section for <a href="https://www.pathwaytalentdevelopment.com/" target="_blank">Pathway Talent Development</a> website'
    ]
  },
  {
    date: '2026-05-14',
    items: [
      'Wrote 1,000 words',
      'Re-wrote service proposal',
      'Sent <a href="https://infinitywellbeingcoaching.com/" target="_blank">IWC</a> client re-initiation document for new project',
      'Started writing a white paper',
      'Started posting on LinkedIn again'
    ]
  },
  {
    date: '2026-05-13',
    items: [
      'Wrote 1,000 words',
      'Progressed <a href="https://infinitywellbeingcoaching.com/" target="_blank">IWC</a> project as far as I could',
      'Set up call with <a href="https://infinitywellbeingcoaching.com/" target="_blank">IWC</a> client to discuss next steps',
      'Started writing proposal for a new L&D service for a client',
      'Created simulation automation for <a href="https://www.pathwaytalentdevelopment.com/" target="_blank">PTD</a> marketing and continuous improvement service',
      'Simulated 30 \'iterations\' of service, refining based on feedback and results each 10 iterations'
    ]
  },
  {
    date: '2026-05-12',
    items: [
      'Had to troubleshoot business email and domain',
      'Set up infrastructure for <a href="https://www.pathwaytalentdevelopment.com/" target="_blank">Pathway Talent Development</a> website',
      'Wrote 1,000 words',
      'Finished plan for business simulation MVP. Will be creating and running first iteration tomorrow.'
    ]
  },
  {
    date: '2026-05-11',
    items: [
      'Followed up with pipeline contacts about availability for future work',
      'Wrote 1,000 words',
      'Created and sent a \'Project Initiation\' workflow to <a href="https://infinitywellbeingcoaching.com/" target="_blank">ICW</a> client to streamline all future projects',
      'Decided on direction for first book'
    ]
  },
  {
    date: '2026-05-10',
    items: [
      'Started planning how I can add more income streams to my business and created next steps for each',
      'Wrote 1,000 words',
      'Finished and sent proposal for first digital training resource to <a href="https://infinitywellbeingcoaching.com/" target="_blank">Infinity Wellbeing & Coaching</a> client'
    ]
  },
  {
    date: '2026-05-09',
    items: [
      'Started working on problem statement for core service',
      'Planned structure for \'framework stress test\' automation',
      'Wrote 1,000 words',
      'Continued proposal for first digital training resource for <a href="https://infinitywellbeingcoaching.com/" target="_blank">Infinity Wellbeing & Coaching</a> client'
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
