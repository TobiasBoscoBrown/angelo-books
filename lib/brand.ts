export const brand = {
  name: "Angelo Books",
  owner: "Angelo Miguel",
  tagline: "Cold calling, run for you. Global B2B campaigns.",
  subTagline:
    "Bring a call-ready list, or I'll build one. I handle the calling setup, make the calls, follow up by email where it makes sense, and book meetings when there's a real reason to continue the conversation.",
  phone: "+1 (209) 309-4812",
  phoneHref: "tel:+12093094812",
  email: "",
  // Primary CTA everywhere on the site.
  calendlyUrl: "https://calendar.app.google/8Q2NfBX5BLbPxdZ38",
  serving: ["Global B2B campaigns"],
  icpDescription:
    "B2B companies with a proven offer and deals worth a real sales conversation",
  founded: "2024",
  type: "Managed cold calling",
  threads: "https://www.threads.com/@justangeloing",
  // Angelo Books LinkedIn company page. Leave empty until the URL is
  // confirmed: every LinkedIn link on the site hides itself while this is "".
  linkedin: "",
  founderRole: "Founder",
  founderQuote:
    "I run cold-calling campaigns for B2B companies that already have something people buy.",
  accentColor: "#1a3a5c",

  hero: {
    eyebrow: "Global B2B campaigns",
    lead:
      "Bring a call-ready list, or I'll build one. I handle the calling setup, make the calls, follow up by email where it makes sense, and book meetings when there's a real reason to continue the conversation.",
    offer:
      "Pilot engagements start at $1,500* and include a minimum of 10 qualified conversations.",
    guarantee: "If we don't reach 10, I keep calling until we do.",
  },

  qualified: {
    is: "A live conversation with the right person, in the right context, where they understand why I'm calling and show enough interest to engage meaningfully, whether that becomes a meeting, a request for more information, a real follow-up opportunity, or a reasonable rejection.",
    isNot: [
      "A receptionist pickup",
      "Voicemail",
      "The wrong person",
      "A brush-off before they understand the reason for the call",
    ],
  },

  howItWorks: [
    {
      title: "List",
      body: "Bring a call-ready list, or I'll build one. Sourcing is quoted separately.",
    },
    {
      title: "Calls",
      body: "I use my own dialer and campaign-tracking setup.",
    },
    {
      title: "Conversations",
      body: "The pilot guarantees at least 10 qualified conversations.",
    },
    {
      title: "Next step",
      body: "Meetings are booked where they make sense. The rest tells us what the market is saying.",
    },
  ],
  emailNote:
    "Email follow-up is used where it supports a real conversation, callback, referral or next step. This is not a bulk cold-email service.",

  // Single core service, used by /services/cold-calling.
  services: [
    {
      slug: "cold-calling",
      name: "Cold Calling",
      tagline: "Run for you, start to finish.",
      description:
        "Bring a call-ready list, or I'll build one. I handle the calling setup, make the calls, follow up by email where it makes sense, and book meetings when there's a real reason to continue the conversation.",
      detail:
        "The pilot guarantees at least 10 qualified conversations. Meetings are booked where there's a genuine reason for one, and the rest tells us what the market is saying.",
      bestFor:
        "B2B companies with a proven offer, deals worth a real sales conversation, and a sales process that can convert qualified meetings.",
      steps: [
        {
          title: "List",
          body: "Bring a call-ready list, or I'll build one. Sourcing is quoted separately.",
        },
        {
          title: "Calls",
          body: "I use my own dialer and campaign-tracking setup.",
        },
        {
          title: "Conversations",
          body: "The pilot guarantees at least 10 qualified conversations.",
        },
        {
          title: "Next step",
          body: "Meetings are booked where they make sense. The rest tells us what the market is saying.",
        },
      ],
      deliverables: [
        "One offer, one primary ICP and one defined market",
        "A minimum of 10 qualified conversations",
        "Meetings booked where there's a genuine reason for one",
        "Call recordings and/or transcripts of qualified conversations, where legally permitted",
        "Email follow-up where it supports a real conversation, callback, referral or next step",
      ],
    },
  ],

  pilot: {
    price: "$1,500",
    priceLead: "Starting at",
    window: "2 weeks",
    scope: [
      "One offer, one primary ICP and one defined market",
      "Minimum 10 qualified conversations",
      "Meetings are booked where there is a genuine reason for one",
      "Call recordings and/or transcripts of qualified conversations are provided where legally permitted",
    ],
    guarantee:
      "If we do not reach 10 qualified conversations within the two weeks for reasons within my control, I keep calling at no additional cost until we do.",
    footnote:
      "*The $1,500 pilot assumes the client provides a call-ready list. List sourcing and enrichment are scoped separately based on the market and difficulty of finding the right contacts.",
  },

  ongoing: {
    title: "After the pilot",
    body: "The pilot gives both sides something real to judge. We use its actual numbers to decide what a monthly engagement should look like, instead of making up a meeting target before the market has been called.",
  },

  capacity: {
    title: "Flexible caller capacity",
    body: [
      "Need the whole calling motion run for you? I can handle it. Already have the list, offer and sales process and just need an experienced caller? I can plug into that too.",
      "If the campaign needs more calling capacity or faster market coverage, I can bring in an additional pair of callers and manage them directly. I stay hands-on and accountable for the quality of the work.",
    ],
  },

  fit: {
    yes: [
      "B2B companies with a proven offer or clear evidence that customers already buy.",
      "Deals valuable enough that a real sales conversation matters, ideally $10k+ ACV/LTV.",
      "A clear, identifiable market with enough reachable prospects to support outbound.",
      "A sales process that can convert qualified meetings, ideally 20%+ close rate.",
      "A team that wants experienced calling and honest market feedback, not a guaranteed calendar.",
    ],
    no: [
      "The offer is still unproven and cold calling is being used to figure out whether anyone wants it.",
      "The market is so small that sustained outbound would burn through it quickly.",
      "The economics only work if the campaign produces a high volume of cheap meetings.",
      "The client wants meetings guaranteed regardless of list quality, offer, timing or market response.",
      "The client wants me dependent on a complicated internal dialer/CRM setup to do the job.",
    ],
  },

  results: [
    {
      metric: "390",
      label: "Dials in one week",
      context: "Mar 31 to Apr 4, on a single client campaign",
      clientFeedback: null,
    },
    {
      metric: "22",
      label: "Appointments set",
      context: "from those 390 dials, in that same week",
      clientFeedback: "Excellent work!",
    },
    {
      metric: "7",
      label: "Appointments set",
      context: "from 85 dials on an earlier campaign",
      clientFeedback: "Great work!",
    },
  ],

  // Screenshots of real client threads, posted publicly by Angelo on Threads.
  // They are from earlier campaigns that included meeting preparation in
  // scope, which the current offer does not, so the gallery says so.
  proof: [
    {
      src: "/proof/proof-2.png",
      width: 554,
      height: 287,
      kicker: "One week of dialing",
      note: "390 dials and 22 appointments set, March 31 to April 4.",
      alt: "Weekly report screenshot reading: Meeting Preps 25, Dials 390, Appointments Set 22, from March 31 to April 4.",
    },
    {
      src: "/proof/proof-1.png",
      width: 541,
      height: 426,
      kicker: "A single day",
      note: "Four appointments booked in one day. The client replied: Excellent work!",
      alt: "Client message thread in which Angelo reports four appointments booked for the day and the client replies, Excellent work!",
    },
    {
      src: "/proof/proof-3.png",
      width: 547,
      height: 352,
      kicker: "A campaign, end to end",
      note: "85 dials and 7 appointments set. The client replied: Great work!",
      alt: "Client message thread showing a campaign summary of 2 meeting preps, 85 dials and 7 appointments set, with the client replying, Great work!",
    },
    {
      src: "/proof/proof-4.jpg",
      width: 1280,
      height: 662,
      kicker: "Pilot client feedback",
      note: "A pilot client on how the calling was handled.",
      alt: "Client message reading: Truthfully, I couldn't have picked a better person for this pilot. You've been thoughtful, (part of the message is blurred) not just a list of calls to get through. I really appreciate that.",
    },
  ],

  proofNote:
    "These threads are from earlier campaigns that included meeting preparation in scope. Prep is not part of the current offer, so read the dials and the appointments.",

  // Businesses that hired Angelo to run outbound. Logos supplied by Angelo.
  clients: [
    {
      src: "/clients/build-my-tribe.png",
      width: 196,
      height: 27,
      name: "Build My Tribe",
      alt: "Build My Tribe logo",
    },
    {
      src: "/clients/localsearch.png",
      width: 148,
      height: 35,
      name: "localsearch",
      alt: "localsearch logo",
    },
    {
      src: "/clients/nick-tann.png",
      width: 187,
      height: 21,
      name: "Nick Tann",
      alt: "Nick Tann logo",
    },
    {
      src: "/clients/revstar.png",
      width: 93,
      height: 56,
      name: "Revstar",
      alt: "Revstar logo",
    },
    {
      src: "/clients/dania-accounting.png",
      width: 108,
      height: 48,
      name: "Dania Accounting",
      alt: "Dania Accounting logo",
    },
    {
      src: "/clients/elysian-construction.png",
      width: 106,
      height: 49,
      name: "Elysian Construction",
      alt: "Elysian Construction logo",
    },
    {
      src: "/clients/unknown-bulb.png",
      width: 48,
      height: 72,
      name: null,
      alt: "Client logo",
    },
    {
      src: "/clients/unknown-mark.png",
      width: 83,
      height: 63,
      name: null,
      alt: "Client logo",
    },
  ],

  faqs: [
    {
      q: "What does the pilot include?",
      a: "Two weeks of calling for one offer, one primary ICP and one defined market, with a minimum of 10 qualified conversations. Meetings get booked where there's a genuine reason for one, and you get call recordings and/or transcripts of the qualified conversations where legally permitted. Pilots start at $1,500, which assumes you provide a call-ready list.",
    },
    {
      q: "What if you don't reach 10 qualified conversations?",
      a: "If we don't reach 10 within the two weeks for reasons within my control, I keep calling at no additional cost until we do.",
    },
    {
      q: "Do you guarantee meetings?",
      a: "No. The guarantee is qualified conversations. Meetings are booked when there's a real reason to continue the conversation, so you don't end up with a calendar full of weak ones.",
    },
    {
      q: "Do I need to bring a list?",
      a: "Bring a call-ready list, or I'll build one. List sourcing and enrichment are quoted separately, based on the market and how hard the right contacts are to find.",
    },
    {
      q: "Whose dialer and CRM do you use?",
      a: "Mine. I use my own dialer and campaign-tracking setup, so you don't need to set anything up for me.",
    },
    {
      q: "Is this a cold email service?",
      a: "No. Email follow-up is used where it supports a real conversation, callback, referral or next step. The calling is the service.",
    },
    {
      q: "Who makes the calls?",
      a: "I do. If a campaign needs more calling capacity or faster market coverage, I can bring in an additional pair of callers and manage them directly. I stay hands-on and accountable for the quality of the work.",
    },
    {
      q: "Where do you run campaigns?",
      a: "Global B2B campaigns. What matters is a clear market with enough reachable prospects to support outbound.",
    },
    {
      q: "What happens after the pilot?",
      a: "We use the pilot's actual numbers to decide what a monthly engagement should look like.",
    },
    {
      q: "Why should I trust your numbers?",
      a: "Because you can read them yourself. The dial counts and appointment counts on this site are screenshots of the actual client threads, posted publicly as the campaigns ran. Those campaigns included meeting preparation in scope, which the current offer does not, so read the dials and the appointments.",
    },
  ],
};
