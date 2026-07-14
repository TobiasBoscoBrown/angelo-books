import { brand } from "@/lib/brand";

export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string; id: string }
  | { t: "h3"; text: string }
  | { t: "lead"; text: string }
  | { t: "answer"; text: string }
  | { t: "stats"; items: { value: string; label: string }[] }
  | { t: "table"; head: string[]; rows: string[][]; caption?: string }
  | { t: "callout"; title: string; text: string }
  | { t: "quote"; text: string; cite: string }
  | { t: "proof"; src: string; alt: string; width: number; height: number; caption: string }
  | { t: "ul"; items: string[] }
  | { t: "faq"; items: { q: string; a: string }[] };

export type Article = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  published: string;
  updated: string;
  readingMinutes: number;
  keyword: string;
  blocks: Block[];
};

export const articles: Article[] = [
  {
    slug: "b2b-cold-calling-conversion-rate",
    title: "B2B Cold Calling Conversion Rate: 475 Real Dials, Logged",
    h1: "B2B cold calling conversion rate: what 475 real dials actually booked",
    description:
      "No industry averages. Two real outbound campaigns for marketing agencies, 475 dials, 29 appointments booked, and the honest math on how many cold calls it takes to book a meeting.",
    published: "2026-07-14",
    updated: "2026-07-14",
    readingMinutes: 7,
    keyword: "b2b cold calling conversion rate",
    blocks: [
      {
        t: "lead",
        text: "Every article about cold calling conversion rates quotes an industry average. Almost none of them show you a phone log. This one has no average in it at all. It has two campaigns, 475 dials, and the messages the clients sent back.",
      },
      {
        t: "answer",
        text: "Across two real outbound campaigns for marketing agencies, 475 dials produced 29 booked appointments. That is a 6.1% dial-to-appointment rate, or roughly 16 dials per meeting booked. The two campaigns individually ran 5.6% and 8.2%.",
      },
      {
        t: "p",
        text: "That number is not a benchmark. It is a log. Below is where each half of it came from, what moved between the two campaigns, and how to run the same arithmetic on your own agency before you decide to hire someone to dial.",
      },

      { t: "h2", text: "The two campaigns", id: "the-campaigns" },
      {
        t: "p",
        text: "Both campaigns were outbound calling for marketing agencies selling into local trades and service businesses in the US and Australia. Same operator on the phone, same general motion: build a list from the agency's ideal client profile, learn the offer, dial, qualify, book.",
      },
      {
        t: "stats",
        items: [
          { value: "475", label: "Total dials across both campaigns" },
          { value: "29", label: "Appointments set" },
          { value: "6.1%", label: "Dial-to-appointment rate" },
        ],
      },
      { t: "h3", text: "Campaign one: 85 dials, 7 appointments" },
      {
        t: "p",
        text: "A single campaign, worked end to end. 85 dials produced 7 booked appointments and 2 meeting prep briefs. That is an 8.2% dial-to-appointment rate, or about 12 dials per meeting.",
      },
      {
        t: "proof",
        src: "/proof/proof-3.png",
        alt: "Client message thread showing a campaign summary of 2 meeting preps, 85 dials and 7 appointments set, with the client replying, Great work!",
        width: 547,
        height: 352,
        caption: "Campaign one, reported to the client as it closed out.",
      },
      { t: "h3", text: "Campaign two: 390 dials in one week, 22 appointments" },
      {
        t: "p",
        text: "A full week of dialing from 31 March to 4 April. 390 dials, 22 appointments set, 25 meeting preps delivered. That is a 5.6% dial-to-appointment rate, or about 18 dials per meeting, at roughly 78 dials a day across five days.",
      },
      {
        t: "proof",
        src: "/proof/proof-2.png",
        alt: "Weekly report screenshot reading: Meeting Preps 25, Dials 390, Appointments Set 22, from March 31 to April 4.",
        width: 554,
        height: 287,
        caption: "The weekly report as it was sent. 390 dials, 22 appointments.",
      },
      {
        t: "callout",
        title: "Read this honestly",
        text: "475 dials across two campaigns is a small sample. It is enough to show you what the work actually looks like. It is not enough to promise you 6.1%, and anyone quoting you a precise rate off a sample this size is selling, not reporting. Your offer, your list, and your market will move this number more than the dialing does.",
      },

      { t: "h2", text: "Why there is no industry average in this article", id: "no-averages" },
      {
        t: "p",
        text: "Search for a B2B cold calling conversion rate and you will find numbers between 1% and 20%, each stated with total confidence. They disagree because they are measuring different things. Some count dials. Some count connects, which throws out every call that rang out. Some count any positive response as a conversion. Some are quietly measuring inbound follow-up calls and calling it cold.",
      },
      {
        t: "p",
        text: "An average built from other people's definitions cannot tell you what your phone will do. What it can do is make a bad campaign look acceptable, because there is always a published number low enough to hide behind.",
      },

      { t: "h2", text: "How to calculate cold call conversion rate", id: "formula" },
      {
        t: "p",
        text: "The formula is simple. The discipline is in picking one denominator and never quietly switching it.",
      },
      {
        t: "table",
        head: ["Rate", "Formula", "From the 390-dial week"],
        rows: [
          ["Dial-to-appointment", "Appointments ÷ total dials × 100", "22 ÷ 390 = 5.6%"],
          ["Dials per appointment", "Total dials ÷ appointments", "390 ÷ 22 ≈ 18 dials"],
          ["Appointments per day", "Appointments ÷ days dialed", "22 ÷ 5 ≈ 4.4 per day"],
          ["Dials per day", "Total dials ÷ days dialed", "390 ÷ 5 = 78 per day"],
        ],
        caption: "Every figure here divides into the same 390 dials and 22 appointments.",
      },
      {
        t: "p",
        text: "Dial-to-appointment is the strictest of these and the one worth reporting, because it is the only one that cannot be improved by redefining a word. Connect rate flatters itself by discarding unanswered calls. Dial-to-appointment counts every attempt, including the ones that went nowhere.",
      },
      {
        t: "callout",
        title: "The number that matters more than any of these",
        text: "Show rate. An appointment that no-shows is not pipeline, it is a hole in your afternoon. A 5.6% dial-to-appointment rate where everyone turns up beats a 10% rate where half of them evaporate. If someone reports appointments to you without reporting show rate, ask why.",
      },

      { t: "h2", text: "Run the math on your own agency", id: "your-math" },
      {
        t: "p",
        text: "Take the range from these two campaigns, 12 to 18 dials per appointment, and work backwards from what you actually need. If you close one in four qualified meetings and you want two new clients a month, you need eight meetings, which is somewhere near 100 to 145 dials a month. At the 78 dials a day these campaigns ran, that is under two days of dialing.",
      },
      {
        t: "table",
        head: ["Meetings you want / month", "Dials needed at 8.2%", "Dials needed at 5.6%"],
        rows: [
          ["4", "≈ 49", "≈ 71"],
          ["8", "≈ 98", "≈ 142"],
          ["12", "≈ 146", "≈ 213"],
          ["20", "≈ 243", "≈ 355"],
        ],
        caption:
          "Both columns use the observed rates from the two campaigns above. Treat them as a range, not a promise.",
      },
      {
        t: "p",
        text: "Now the real question. Those dials have to come from somewhere. The arithmetic that actually decides this is not the conversion rate, it is who is holding the phone for the two days it takes.",
      },

      { t: "h2", text: "What the number does not tell you", id: "limits" },
      {
        t: "p",
        text: "The 390-dial week converted lower than the 85-dial campaign. It would be easy to write a story about why. Different market, list fatigue, a harder week. With a sample this size, the honest answer is that the difference is well inside the noise, and pretending otherwise would be exactly the thing this article is arguing against.",
      },
      {
        t: "p",
        text: "What both campaigns do show is the shape of the work: high, boring, consistent volume. 78 dials a day is not a growth hack. It is somebody dialing all day, every day, and writing down what happened.",
      },
      {
        t: "ul",
        items: [
          "Volume is the input. There is no version of this where 20 dials a week produces a pipeline.",
          "The list decides more than the script does. Dialing the wrong 390 people converts at zero.",
          "Rates move campaign to campaign. Judge the motion over months, not over one week.",
          "An appointment is not revenue. Track show rate and close rate or you are measuring noise.",
        ],
      },

      { t: "h2", text: "Should you dial it yourself or hand it over?", id: "build-or-buy" },
      {
        t: "p",
        text: "If you are the agency owner, your dials are the most expensive dials in the building, because the hour you spend on the phone is an hour you are not spending closing or delivering. Hiring an in-house SDR fixes that and creates a new problem: you are now recruiting, training, and managing a role you have never done yourself, and paying for it before it works.",
      },
      {
        t: "p",
        text: "The third option is handing the dialing to someone who already does it, on a campaign basis, and keeping the closing. That is what Angelo Books is. The numbers in this article are ours, the screenshots are the actual client threads, and the person who picks up your call is the person who runs your campaign.",
      },
      {
        t: "quote",
        text: "I book qualified meetings for marketing agencies in the US and AU.",
        cite: "Angelo Miguel, founder of Angelo Books",
      },

      { t: "h2", text: "Frequently asked questions", id: "faq" },
      {
        t: "faq",
        items: [
          {
            q: "What is a good B2B cold calling conversion rate?",
            a: "There is no single good number, because published rates measure different things. What is useful is a rate you define once and track honestly. Across the two campaigns in this article, dial-to-appointment ran between 5.6% and 8.2%, counting every dial including the ones nobody answered.",
          },
          {
            q: "How many cold calls does it take to book a meeting?",
            a: "In these two campaigns, between 12 and 18 dials per booked appointment. 85 dials produced 7 appointments, and 390 dials produced 22. Your number will depend far more on your list and your offer than on the dialing itself.",
          },
          {
            q: "How do you calculate cold call conversion rate?",
            a: "Divide appointments by total dials and multiply by 100. For the week of 31 March to 4 April: 22 appointments ÷ 390 dials × 100 = 5.6%. The rule that matters is picking one denominator, total dials, and never quietly switching to connects to make the number look better.",
          },
          {
            q: "How many cold calls per day is good?",
            a: "The week described here ran about 78 dials a day across five days. That is a full-time dialing day. The point is not the specific number, it is that the volume has to be consistent. Occasional dialing does not produce a pipeline.",
          },
          {
            q: "Is cold calling still worth it for marketing agencies?",
            a: "It was worth it in these two campaigns: 475 dials turned into 29 booked appointments with agencies selling into local trades and service businesses. Whether it is worth it for you depends on whether you can close the meetings once they are on the calendar, and whether the dialing hours come out of your week or someone else's.",
          },
        ],
      },
      {
        t: "callout",
        title: "Want your own numbers instead of ours?",
        text: `Book a free strategy call with ${brand.owner}. We will look at your ICP, talk through your current pipeline, and tell you what we would actually run. No long-term contract, campaign basis.`,
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
