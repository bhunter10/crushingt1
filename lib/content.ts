import {
  BookOpen,
  CalendarHeart,
  HandHeart,
  HeartPulse,
  Instagram,
  Megaphone,
  Newspaper,
  PlayCircle,
  ScanHeart,
  Shirt,
  Sparkles,
  Users,
  WalletCards,
  Youtube
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/story", label: "Our Story" },
  { href: "/news", label: "News" },
  { href: "/donations", label: "Donations" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" }
];

export const socialLinks = [
  {
    href: "https://www.youtube.com/@CrushingT1",
    label: "YouTube",
    icon: Youtube,
    text: "Latest uploads, Shorts, awareness clips, and longer education videos from CrushingT1."
  },
  {
    href: "https://www.instagram.com/crushingt1/",
    label: "Instagram",
    icon: Instagram,
    text: "Short-form education, community updates, and campaign videos from CrushingT1."
  }
];

export const awarenessFacts = [
  {
    title: "Type 1 is autoimmune",
    text: "T1D happens when the immune system attacks insulin-producing beta cells. It is not caused by eating sugar."
  },
  {
    title: "It can happen at any age",
    text: "Many people are diagnosed as children, but T1D can begin in teens and adults too."
  },
  {
    title: "Early signs matter",
    text: "Extreme thirst, frequent urination, weight loss, fatigue, blurry vision, and nausea can be warning signs."
  },
  {
    title: "Research needs momentum",
    text: "Better treatments, prevention, and cure-focused research all depend on public attention and support."
  }
];

export const helpActions = [
  {
    icon: Megaphone,
    title: "Share the signs",
    text: "Post simple symptom education so families recognize T1D before a crisis."
  },
  {
    icon: PlayCircle,
    title: "Amplify videos",
    text: "Share social clips that show the invisible daily work behind T1D care."
  },
  {
    icon: Users,
    title: "Build community",
    text: "Help connect families, schools, coaches, and local businesses around awareness."
  },
  {
    icon: WalletCards,
    title: "Support responsibly",
    text: "Make a pledge, sponsor a campaign, or ask about fiscal sponsor opportunities."
  }
];

export const newsItems = [
  {
    category: "Awareness",
    title: "Crushing myths about Type 1 diabetes",
    date: "Coming soon",
    text: "A recurring series focused on the difference between Type 1 and Type 2, early symptoms, and the real daily load of T1D."
  },
  {
    category: "Research",
    title: "Plain-language research explainers",
    date: "Coming soon",
    text: "Short summaries that translate prevention, beta cell, immunotherapy, and technology research into everyday language."
  },
  {
    category: "Community",
    title: "Local stories and supporter spotlights",
    date: "Coming soon",
    text: "A place for family stories, volunteer notes, school awareness projects, and sponsor recognition."
  }
];

export const videos = [
  {
    title: "Day in the life with T1D",
    type: "Social series",
    text: "Short clips showing CGMs, insulin decisions, school routines, sports, sleep interruptions, and the hidden math of care."
  },
  {
    title: "Learn the signs",
    type: "Education",
    text: "Fast, shareable videos about symptoms, DKA warning signs, and when to ask for a blood glucose check."
  },
  {
    title: "Crushing T1D myths",
    type: "Awareness",
    text: "Simple myth-versus-fact explainers for families, teachers, coaches, and friends."
  },
  {
    title: "Research, translated",
    type: "Future research",
    text: "Plain-language updates on treatment progress, prevention work, and cure-focused research."
  }
];

export const instagramVideos = [
  {
    title: "Hot dogs",
    caption: "A quick Crushing T1 Reel from the Instagram feed.",
    href: "https://www.instagram.com/reel/DYxYx-UpdDK/",
    poster: "/images/instagram-hot-dogs.jpg"
  },
  {
    title: "Only six years old",
    caption: "A short social clip helping people understand the reality of Type 1 diabetes.",
    href: "https://www.instagram.com/reel/DYvQoSyPceP/",
    poster: "/images/instagram-only-six.jpg"
  },
  {
    title: "Date night",
    caption: "A recent Crushing T1 Reel from Instagram.",
    href: "https://www.instagram.com/reel/DYqY2xHsb74/"
  },
  {
    title: "Eledon kidney transplant trial",
    caption: "A research-focused update shared through the Crushing T1 Instagram feed.",
    href: "https://www.instagram.com/reel/DYn0o33szLI/"
  },
  {
    title: "Call to action T1D Community",
    caption: "A community call-to-action from the Instagram social feed.",
    href: "https://www.instagram.com/reel/DYi-WgjN6l0/"
  },
  {
    title: "New Dexcom sensor",
    caption: "A practical T1D technology update from Instagram.",
    href: "https://www.instagram.com/reel/DYfx6qih4gw/"
  }
];

export const donationOptions = [
  {
    icon: HandHeart,
    title: "Pledge future support",
    text: "Tell us you want to support CrushingT1 when the donation path is legally ready."
  },
  {
    icon: CalendarHeart,
    title: "Sponsor a campaign",
    text: "Businesses and families can sponsor awareness videos, events, school kits, or merch drops."
  },
  {
    icon: ScanHeart,
    title: "Use a fiscal sponsor",
    text: "If a qualified nonprofit partner is selected, gifts can be routed through that organization."
  },
  {
    icon: Sparkles,
    title: "Future zero-fee platform",
    text: "After nonprofit setup, Zeffy is the preferred option to keep processing costs as close to zero as possible."
  }
];

export const merchItems = [
  {
    title: "Crushing T1D tee",
    text: "A clean awareness shirt designed for walks, school days, and local campaigns."
  },
  {
    title: "Learn the signs sticker pack",
    text: "Small reminders for laptops, water bottles, classrooms, clinics, and team gear."
  },
  {
    title: "Blue circle campaign hoodie",
    text: "A future awareness-month drop that can support education and outreach costs."
  }
];

export const researchAngles = [
  {
    icon: HeartPulse,
    title: "Treatment progress",
    text: "Show supporters how technology, screening, insulin access, and immunotherapy can improve daily life."
  },
  {
    icon: BookOpen,
    title: "Plain-language science",
    text: "Translate research into clear updates donors and families can understand quickly."
  },
  {
    icon: Newspaper,
    title: "Transparent impact",
    text: "Publish what funds support, what is still pending, and when formal nonprofit status changes the donation model."
  },
  {
    icon: Shirt,
    title: "Campaignable merch",
    text: "Use merch as a conversation starter, not just a product."
  }
];
