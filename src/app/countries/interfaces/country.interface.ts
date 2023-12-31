export enum Region {
  Africa   = 'Africa',
  Americas = 'Americas',
  Asia     = 'Asia',
  Europe   = 'Europe',
  Oceania  = 'Oceania',
}

export interface SmallCountry {
  name: string;
  cca3: string;
  borders: string[];
}

export interface Country {
  name:         Name;
  cca3:         string;
  cioc?:        string;
  status:       Status;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    Subregion;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}



export interface Currencies {
  CHF?: All;
  EUR?: All;
  GBP?: All;
  RUB?: All;
  GIP?: All;
  ISK?: All;
  NOK?: All;
  RON?: All;
  BGN?: All;
  CZK?: All;
  DKK?: All;
  FOK?: All;
  IMP?: All;
  RSD?: All;
  SEK?: All;
  HUF?: All;
  BAM?: BAM;
  BYN?: All;
  GGP?: All;
  UAH?: All;
  MDL?: All;
  MKD?: All;
  ALL?: All;
  PLN?: All;
  JEP?: All;
}

export interface All {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  fra?: string;
  gsw?: string;
  ita?: string;
  roh?: string;
  cnr?: string;
  eng?: string;
  gle?: string;
  ell?: string;
  tur?: string;
  rus?: string;
  cat?: string;
  swe?: string;
  slk?: string;
  lit?: string;
  isl?: string;
  est?: string;
  de?:  string;
  nno?: string;
  nob?: string;
  smi?: string;
  deu?: string;
  sqi?: string;
  srp?: string;
  ron?: string;
  bul?: string;
  ces?: string;
  spa?: string;
  dan?: string;
  fao?: string;
  glv?: string;
  slv?: string;
  lat?: string;
  lav?: string;
  hun?: string;
  bos?: string;
  hrv?: string;
  nld?: string;
  bel?: string;
  nfr?: string;
  ukr?: string;
  por?: string;
  ltz?: string;
  mlt?: string;
  mkd?: string;
  fin?: string;
  pol?: string;
  nor?: string;
  nrf?: string;
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}

export enum StartOfWeek {
  Monday = "monday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}

export enum Subregion {
  CentralEurope = "Central Europe",
  EasternEurope = "Eastern Europe",
  NorthernEurope = "Northern Europe",
  SoutheastEurope = "Southeast Europe",
  SouthernEurope = "Southern Europe",
  WesternEurope = "Western Europe",
}
