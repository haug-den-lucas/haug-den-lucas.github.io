// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'haug-den-lucas', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'DETERMINISTIC6G/6GDetCom_Simulator',
          'haug-den-lucas/primrec',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Lucas Haug',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'lucas-haug',
    x: '',
    mastodon: '',
    researchGate: 'Lucas-Haug-2',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'lucashaug.de',
    phone: '',
    email: 'mail[at]lucashaug.de',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Android',
    'Angular',
    'C++',
    'Go',
    'Java',
    'JavaScript',
    'Kotlin',
    'Python',
    'TypeScript',
  ],
  experiences: [
    {
      company: 'University of Stuttgart',
      position: 'PhD Student',
      from: 'June 2023',
      to: 'Present',
    },
    {
      company: 'AUSY Technologies Germany AG',
      position: 'Working Student',
      from: 'Juli 2022',
      to: 'Mai 2023',
    },
    {
      company: 'AUSY Technologies Germany AG',
      position: 'Working Student',
      from: 'October 2018',
      to: 'December 2021',
    },
    {
      company: 'University of Stuttgart',
      position: 'Teaching Assistant',
      from: 'April 2020',
      to: 'September 2020',
    },
    {
      company: 'Daimler AG',
      position: 'Working Student',
      from: 'October 2017',
      to: 'September 2018',
      companyLink: '',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'University of Stuttgart',
      degree: 'Msc. Computer Science',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'University of Oslo  ',
      degree: 'Erasmus Exchange Student',
      from: '2022',
      to: '2022',
    },
    {
      institution: 'University of Stuttgart',
      degree: 'BSc. Computer Science',
      from: '2017',
      to: '2020',
    },
  ],
  publications: [
    {
      title: 'Compensating the Packet Delay Variation for 6G Integrated with IEEE Time-Sensitive Networking',
      conferenceName: '33rd International Conference on Real-Time Networks and Systems',
      journalName: '',
      authors: 'Marilet De Andrade; Joachim Sachs; Lucas Haug; Simon Egger; Frank Dürr; Balázs Varga; Janos Farkas; György Miklós',
      link: 'https://doi.org/10.48550/arXiv.2602.21444',
      description:
        '6G is deemed as a key technology to support emerging applications with stringent requirements for highly dependable and timecritical communication. In this paper, we investigate 6G networks integrated with TSN and how to compensate for wireless stochastic behavior which involves a large intrinsic packet delay variation. We evaluate a 6G solution to reduce packet delay variation that is based on de-jittering. For this, we propose to use virtual timeslots for providing the required time-awareness. We discuss the benefits of the proposed solution while evaluating the impact of the timeslot size on the number of schedulable TSN streams.'
    },
    {
      title: 'Analysis of Time Synchronization for 6G-TSN Networks with Hot Standby',
      conferenceName: '34th International Conference on Computer Communications and Networks (ICCCN)',
      journalName: '',
      authors: 'Mahin Ahmed; Lucas Haug; Raheeb Muzaffar; Damir Hamidovic; Armin Hadziaganovic; Hans-Peter Bernhard; Marilet De Andrade; János Farkas',
      link: 'https://doi.org/10.1109/ICCCN65249.2025.11134023',
      description:
        'Reliable time synchronization is of utmost importance within 6G networks, particularly when envisioning their role in future industrial automation scenarios that demand deterministic communication. In particular, we focus on the integration of 6G with time-sensitive networking (TSN). Traditionally, the best timeTransmitter clock algorithm (BTCA) is used to dynamically select a grandmaster (GM) for TSN nodes in a 6G-TSN network. However, BTCA’s performance in case of link or device failures is categorized to be slow. The IEEE 802.1ASdm standard addresses this limitation by introducing a hot standby GM in the network. In this paper, we extend the hot standby amendment to 6G-TSN networks to support continuous time synchronization. For the analysis, we develop a simulation framework in OMNeT++. We analyze the performance in terms of clock drift and out-of-sync time for different time synchronization scenarios in case of failures. Having two synchronized GMs in the network reduces the out-of-sync time in case of failure when compared to BTCA.'
    },
    {
      title: 'Simulating and Emulating the Characteristic Packet Delay of Logical 5G TSN Bridges',
      conferenceName: '4. KuVS Fachgespräch "Network Softwarization"',
      journalName: '',
      authors: 'Lucas Haug; Frank Dürr; Simon Egger; Lorenz Grohmann; James Gross; Gourav Prateek Sharma; Joachim Sachs',
      link: 'http://dx.doi.org/10.15496/publikation-105097',
      description:
        'Due to the demand of many time-sensitive mobile applications, there is currently a strong trend to extend Time- Sensitive Networking (TSN) to the wireless domain. In particular, 3GPP has speficied a logial 5G TSN bridge, which implements the same functions as wireline TSN bridges (e.g. the Time- Aware Shaper of IEEE 802.1Qbv). However, a logical bridge has fundamentally different port-to-port delay properties than its wired counterpart. In this paper, we present two open-source tools and open latency data sets for simulating and emulating the characteristic port-to-port delay of logical 5G TSN bridges.'
    },
    {
      title: 'How to Optimize Joint Routing and Scheduling Models for TSN Using Integer Linear Programming',
      conferenceName: '29th International Conference on Real-Time Networks and Systems',
      journalName: '',
      authors: 'David Hellmanns; Lucas Haug; Moritz Hildebrand; Frank Dürr; Stephan Kehrer; René Hummen',
      link: 'https://dl.acm.org/doi/10.1145/3453417.3453421',
      description:
        'Reliable real-time communication is an essential technology for industrial manufacturing but also other branches to transport mission-critical messages. IEEE Time-Sensitive Networking (TSN) is a disruptive real-time communication standard extending IEEE Ethernet with real-time mechanisms. One of the core features of TSN is the Time-Aware Shaper (TAS) enabling TDMA-based scheduling of streams within the network. TDMA has many advantages from the real-time perspective. Foremost, stream isolation in the time dimension enables tight delay and jitter bounds. Moreover, conformance to these bounds is proven by the design of the TDMA schedule. However, calculating an optimal schedule is an NP-hard problem. Therefore, various approaches to optimize the schedule calculation are proposed, such as Integer Linear Programming (ILP). Nevertheless, a systematic comparsion of the different optimization approaches with respect to their performance is missing so far. To fill this gap, we first provide a systematic classification of optimizations of ILP-based TSN scheduling. To quantify the effects of such optimization approaches, we introduce a base ILP and propose optimizations for the different categories. Using the proposed optimization, we evaluate the performance with regard to execution time and schedulability (number of solved schedules). Our results show that the optimizations lead to strongly fluctuating results. Certain intuitive optimizations can even lead to massive performance degradations.'
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  enablePWA: true,
};

export default CONFIG;
