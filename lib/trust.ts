export type TrustBrand = {
  name: string;
  slug?: string;
  hasLogo?: boolean;
};

/** Client names for the homepage trust carousel. Domains were used only to fetch logos. */
export const trustBrands: TrustBrand[] = [
  { name: "Clearfast Air Cargo Agencies" },
  { name: "UltraTech Cement", slug: "ultratech", hasLogo: true },
  { name: "FIAT", slug: "fiat", hasLogo: true },
  { name: "Stellantis", slug: "stellantis", hasLogo: true },
  { name: "Somany Tiles & Bathware", slug: "somany", hasLogo: true },
  { name: "Shalimar's" },
  { name: "Shalimar Paints" },
  { name: "Ambuja Neotia", slug: "ambuja-neotia", hasLogo: true },
  { name: "Seawoods Residences" },
  { name: "Bajaj Chemicals" },
  { name: "Electrosteel Castings", slug: "electrosteel", hasLogo: true },
  { name: "Amkette Analytics" },
  { name: "Vatech India" },
  { name: "Paras Defence", slug: "paras-defence", hasLogo: true },
  { name: "Dalmia Gold Tea" },
  { name: "Susten by Mahindra" },
  { name: "C&S Electric", slug: "cselectric", hasLogo: true },
  { name: "IndianOil", slug: "indianoil", hasLogo: true },
  { name: "ebm-papst", slug: "ebmpapst", hasLogo: true },
  { name: "Aquatiz" },
  { name: "Atotech", slug: "atotech", hasLogo: true },
  { name: "Auditivio Hearing" },
  { name: "AudioOne" },
  { name: "Tata", slug: "tata", hasLogo: true },
  { name: "Larsen & Toubro", slug: "lnt", hasLogo: true },
  { name: "Ford", slug: "ford", hasLogo: true },
  { name: "SGS Weather" },
  { name: "Polaris", slug: "polaris", hasLogo: true },
  { name: "Ducati", slug: "ducati", hasLogo: true },
  { name: "DSV", slug: "dsv", hasLogo: true },
  { name: "DHL", slug: "dhl", hasLogo: true },
  { name: "Asian" },
  { name: "Breitling", slug: "breitling", hasLogo: true },
  { name: "HAMMER", slug: "hammer", hasLogo: true },
  { name: "Oure Source (India)" },
  { name: "Zuventus Healthcare" },
  { name: "Hamilton Housewares" },
];
