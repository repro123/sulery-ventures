export const businessName = "Sulery Computer Technologies";

export const parentBusinessName = "Sulery Ventures";

export const siteUrl = "https://suleryventures.com";

export const businessEmail = "suleryventures@hotmail.com";

export const businessPhoneNumbers = ["+2348023220365", "+2348098235567"];

export const businessLocations = ["Apapa", "Surulere", "Ikorodu"].map(
  (location) => ({
    "@type": "Place",
    name: `${location}, Lagos, Nigeria`,
    address: {
      "@type": "PostalAddress",
      addressLocality: location,
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
  }),
);

export const coreServices = [
  "Computer sales",
  "Computer supply",
  "Computer repairs",
  "Computer maintenance",
  "Office equipment sales and support",
  "Computer accessories",
  "Computer peripherals",
  "Computer consumables",
  "Systems networking",
  "Internet connectivity",
  "General printing",
  "Cybercafe installation",
  "WAEC and NECO CBT deployment",
  "CCTV installation",
  "Intercom systems",
  "Access control implementation",
  "Website design",
  "Point of sales software setup",
  "Office furniture",
];
