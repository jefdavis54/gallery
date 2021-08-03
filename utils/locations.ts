interface Location {
  easyId: string;
  imageMaxWidth: number;
  imageMaxHeight: number;
  imageOptWidth: number;
  imageOptHeight: number;
  imageThmWidth: number;
  imageThmHeight: number;
  name: string;
  nickname: string;
  dateFirstOpened: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  coorN: number;
  coorE: number;
  website: string;
  wikiPage: string;
}

const locations: Location[] = [
  {
    easyId: "ac",
    imageMaxWidth: 4500,
    imageMaxHeight: 3000,
    imageOptWidth: 1920,
    imageOptHeight: 1280,
    imageThmWidth: 480,
    imageThmHeight: 320,
    name: "Amon Carter Museum of American Art",
    nickname: "Amon Carter",
    dateFirstOpened: "a1961",
    streetAddress: "3501 Camp Bowie Boulevard",
    city: "Fort Worth",
    state: "TX",
    postalCode: "76107",
    country: "USA",
    coorN: 327478670,
    coorE: -973706357,
    website: "www.cartermuseum.org",
    wikiPage:
      "https://en.wikipedia.org/wiki/Amon_Carter_Museum_of_American_Art",
  },
  {
    easyId: "aic",
    imageMaxWidth: 1392,
    imageMaxHeight: 1400,
    imageOptWidth: 1392,
    imageOptHeight: 1400,
    imageThmWidth: 477,
    imageThmHeight: 480,
    name: "Art Institute of Chicago",
    nickname: "Art Institute",
    dateFirstOpened: "a1879",
    streetAddress: "111 South Michigan Avenue",
    city: "Chicago",
    state: "IL",
    postalCode: "60603",
    country: "USA",
    coorN: 418795845,
    coorE: -876259020,
    website: "www.artic.edu",
    wikiPage: "https://en.wikipedia.org/wiki/Art_Institute_of_Chicago",
  },
  {
    easyId: "basel",
    imageMaxWidth: 2672,
    imageMaxHeight: 1906,
    imageOptWidth: 1920,
    imageOptHeight: 1370,
    imageThmWidth: 480,
    imageThmHeight: 342,
    name: "Kunstmuseum Basel",
    nickname: "Kunstmuseum",
    dateFirstOpened: "a1661",
    streetAddress: "St. Alban-Graben 20",
    city: "Basel",
    state: "",
    postalCode: "4052",
    country: "Switzerland",
    coorN: 475545863,
    coorE: 75927322,
    website: "www.kunstmuseumbasel.ch",
    wikiPage: "https://en.wikipedia.org/wiki/Kunstmuseum_Basel",
  },
  {
    easyId: "belvedere",
    imageMaxWidth: 4252,
    imageMaxHeight: 2385,
    imageOptWidth: 1920,
    imageOptHeight: 1077,
    imageThmWidth: 480,
    imageThmHeight: 269,
    name: "Österreichische Galerie Belvedere",
    nickname: "Belvedere Museum",
    dateFirstOpened: "a1903",
    streetAddress: "Schloss Belvedere, Prinz Eugen-Straße 27",
    city: "Vienna",
    state: "",
    postalCode: "1030 Wien",
    country: "Austria",
    coorN: 481915308,
    coorE: 163787253,
    website: "www.belvedere.at",
    wikiPage:
      "https://en.wikipedia.org/wiki/%C3%96sterreichische_Galerie_Belvedere",
  },
  {
    easyId: "beyeler",
    imageMaxWidth: 7060,
    imageMaxHeight: 4300,
    imageOptWidth: 1920,
    imageOptHeight: 1169,
    imageThmWidth: 480,
    imageThmHeight: 292,
    name: "Fondation Beyeler",
    nickname: "Beyeler Foundation",
    dateFirstOpened: "a1982",
    streetAddress: "Baselstrasse 101",
    city: "Riehen",
    state: "",
    postalCode: "4125",
    country: "Switzerland",
    coorN: 475881022,
    coorE: 76488274,
    website: "www.fondationbeyeler.ch/en",
    wikiPage: "https://en.wikipedia.org/wiki/Beyeler_Foundation",
  },
  {
    easyId: "boijmans",
    imageMaxWidth: 2816,
    imageMaxHeight: 2112,
    imageOptWidth: 1920,
    imageOptHeight: 1440,
    imageThmWidth: 480,
    imageThmHeight: 360,
    name: "Museum Boijmans Van Beuningen",
    nickname: "Boijmans Museum",
    dateFirstOpened: "a1849-07-03",
    streetAddress: "Museumpark 18",
    city: "Rotterdam",
    state: "",
    postalCode: "3015 CX",
    country: "Netherlands",
    coorN: 519142145,
    coorE: 44711520,
    website: "www.boijmans.nl",
    wikiPage: "https://en.wikipedia.org/wiki/Museum_Boijmans_Van_Beuningen",
  },
  {
    easyId: "cleveland",
    imageMaxWidth: 1024,
    imageMaxHeight: 665,
    imageOptWidth: 1024,
    imageOptHeight: 665,
    imageThmWidth: 480,
    imageThmHeight: 312,
    name: "Cleveland Museum of Art",
    nickname: "Cleveland Museum of Art",
    dateFirstOpened: "a1916",
    streetAddress: "11150 East Boulevard",
    city: "Cleveland",
    state: "OH",
    postalCode: "44106",
    country: "USA",
    coorN: 415090411,
    coorE: -816142590,
    website: "www.clevelandart.org",
    wikiPage: "https://en.wikipedia.org/wiki/Cleveland_Museum_of_Art",
  },
  {
    easyId: "colby",
    imageMaxWidth: 1440,
    imageMaxHeight: 500,
    imageOptWidth: 1440,
    imageOptHeight: 500,
    imageThmWidth: 480,
    imageThmHeight: 167,
    name: "Colby College Museum of Art",
    nickname: "Colby Museum of Art",
    dateFirstOpened: "a1959",
    streetAddress: "5600 Mayflower Hill Drive",
    city: "Waterville",
    state: "ME",
    postalCode: "4901",
    country: "USA",
    coorN: 445638691,
    coorE: -696648249,
    website: "www.colby.edu/museum",
    wikiPage: "https://en.wikipedia.org/wiki/Colby_College_Museum_of_Art",
  },
  {
    easyId: "deyoung",
    imageMaxWidth: 3264,
    imageMaxHeight: 2448,
    imageOptWidth: 1920,
    imageOptHeight: 1440,
    imageThmWidth: 480,
    imageThmHeight: 360,
    name: "M. H. de Young Memorial Museum",
    nickname: "de Young Museum",
    dateFirstOpened: "a1895-03-24",
    streetAddress: "50 Hagiwara Tea Garden Drive",
    city: "San Francisco",
    state: "CA",
    postalCode: "94118",
    country: "USA",
    coorN: 377714690,
    coorE: -1224708642,
    website: "deyoung.famsf.org",
    wikiPage: "https://en.wikipedia.org/wiki/De_Young_Museum",
  },
  {
    easyId: "dia",
    imageMaxWidth: 3686,
    imageMaxHeight: 1236,
    imageOptWidth: 1920,
    imageOptHeight: 644,
    imageThmWidth: 480,
    imageThmHeight: 161,
    name: "Detroit Institute of Arts",
    nickname: "DIA",
    dateFirstOpened: "a1883",
    streetAddress: "5200 Woodward Avenue",
    city: "Detroit",
    state: "MI",
    postalCode: "48202",
    country: "USA",
    coorN: 423594199,
    coorE: -830667651,
    website: "www.dia.org",
    wikiPage: "https://en.wikipedia.org/wiki/Detroit_Institute_of_Arts",
  },
  {
    easyId: "dorsay",
    imageMaxWidth: 8095,
    imageMaxHeight: 3705,
    imageOptWidth: 1920,
    imageOptHeight: 879,
    imageThmWidth: 480,
    imageThmHeight: 220,
    name: "Musée d'Orsay",
    nickname: "Musée d'Orsay",
    dateFirstOpened: "a1986",
    streetAddress: "1 Rue de la Légion d'Honneur",
    city: "Paris",
    state: "",
    postalCode: "75007",
    country: "France",
    coorN: 488598964,
    coorE: 23241328,
    website: "www.musee-orsay.fr",
    wikiPage: "https://en.wikipedia.org/wiki/Mus%C3%A9e_d%27Orsay",
  },
  {
    easyId: "freer",
    imageMaxWidth: 2565,
    imageMaxHeight: 1731,
    imageOptWidth: 1920,
    imageOptHeight: 1296,
    imageThmWidth: 480,
    imageThmHeight: 324,
    name: "Freer Gallery of Art",
    nickname: "Freer Gallery of Art",
    dateFirstOpened: "a1923",
    streetAddress: "Jefferson Drive at 12th Street SW",
    city: "Washington",
    state: "DC",
    postalCode: "20560",
    country: "USA",
    coorN: 388879143,
    coorE: -770295762,
    website: "www.asia.si.edu",
    wikiPage: "https://en.wikipedia.org/wiki/Freer_Gallery_of_Art",
  },
  {
    easyId: "frick",
    imageMaxWidth: 3366,
    imageMaxHeight: 2525,
    imageOptWidth: 1920,
    imageOptHeight: 1440,
    imageThmWidth: 480,
    imageThmHeight: 360,
    name: "Frick Collection",
    nickname: "Frick Collection",
    dateFirstOpened: "a1935",
    streetAddress: "1 East 70th Street",
    city: "New York",
    state: "NY",
    postalCode: "10021",
    country: "USA",
    coorN: 407712090,
    coorE: -739695878,
    website: "www.frick.org",
    wikiPage: "https://en.wikipedia.org/wiki/Frick_Collection",
  },
  {
    easyId: "getty",
    imageMaxWidth: 1731,
    imageMaxHeight: 1227,
    imageOptWidth: 1731,
    imageOptHeight: 1227,
    imageThmWidth: 480,
    imageThmHeight: 340,
    name: "J. Paul Getty Museum",
    nickname: "The Getty",
    dateFirstOpened: "a1974",
    streetAddress: "1200 Getty Center Drive",
    city: "Los Angeles",
    state: "CA",
    postalCode: "17985",
    country: "USA",
    coorN: 340780358,
    coorE: -1184762841,
    website: "www.getty.edu/museum",
    wikiPage: "https://en.wikipedia.org/wiki/J._Paul_Getty_Museum",
  },
  {
    easyId: "glasgow",
    imageMaxWidth: 1024,
    imageMaxHeight: 349,
    imageOptWidth: 1024,
    imageOptHeight: 349,
    imageThmWidth: 480,
    imageThmHeight: 164,
    name: "Kelvingrove Art Gallery and Museum",
    nickname: "Kelvingrove Museum",
    dateFirstOpened: "a1901",
    streetAddress: "Argyle St",
    city: "Glasgow",
    state: "",
    postalCode: "G3 8AG",
    country: "UK",
    coorN: 558685891,
    coorE: -42927926,
    website: "www.glasgowlife.org.uk",
    wikiPage:
      "https://en.wikipedia.org/wiki/Kelvingrove_Art_Gallery_and_Museum",
  },
  {
    easyId: "gug",
    imageMaxWidth: 6000,
    imageMaxHeight: 4000,
    imageOptWidth: 1920,
    imageOptHeight: 1280,
    imageThmWidth: 480,
    imageThmHeight: 320,
    name: "Solomon R. Guggenheim Museum",
    nickname: "The Guggenheim",
    dateFirstOpened: "a1937",
    streetAddress: "1071 Fifth Avenue",
    city: "New York",
    state: "NY",
    postalCode: "10128",
    country: "USA",
    coorN: 407829796,
    coorE: -739611593,
    website: "www.guggenheim.org",
    wikiPage: "https://en.wikipedia.org/wiki/Solomon_R._Guggenheim_Museum",
  },
  {
    easyId: "hamburg",
    imageMaxWidth: 4224,
    imageMaxHeight: 2816,
    imageOptWidth: 1920,
    imageOptHeight: 1280,
    imageThmWidth: 480,
    imageThmHeight: 320,
    name: "Kunsthalle Hamburg",
    nickname: "Hamburger Kunsthalle",
    dateFirstOpened: "a1869-08-20",
    streetAddress: "Glockengießerwall",
    city: "Hamburg",
    state: "",
    postalCode: "20095",
    country: "Germany",
    coorN: 535555111,
    coorE: 100003571,
    website: "www.hamburger-kunsthalle.de",
    wikiPage: "https://en.wikipedia.org/wiki/Kunsthalle_Hamburg",
  },
  {
    easyId: "hermitage",
    imageMaxWidth: 4052,
    imageMaxHeight: 2066,
    imageOptWidth: 1920,
    imageOptHeight: 979,
    imageThmWidth: 480,
    imageThmHeight: 245,
    name: "The State Hermitage Museum",
    nickname: "Hermitage Museum",
    dateFirstOpened: "a1764",
    streetAddress: "38 Palace Embankment",
    city: "Saint Petersburg",
    state: "",
    postalCode: "190000",
    country: "Russia",
    coorN: 599398317,
    coorE: 303123710,
    website: "hermitagemuseum.org",
    wikiPage: "https://en.wikipedia.org/wiki/Hermitage_Museum",
  },
  {
    easyId: "khm",
    imageMaxWidth: 3888,
    imageMaxHeight: 2592,
    imageOptWidth: 1920,
    imageOptHeight: 1280,
    imageThmWidth: 480,
    imageThmHeight: 320,
    name: "Kunsthistorisches Museum",
    nickname: "Kunsthistorisches Museum",
    dateFirstOpened: "a1891",
    streetAddress: "Maria-Theresien-Platz",
    city: "Vienna",
    state: "",
    postalCode: "1010",
    country: "Austria",
    coorN: 482038016,
    coorE: 163595987,
    website: "www.khm.at",
    wikiPage: "https://en.wikipedia.org/wiki/Kunsthistorisches_Museum",
  },
  {
    easyId: "kmw",
    imageMaxWidth: 500,
    imageMaxHeight: 334,
    imageOptWidth: 500,
    imageOptHeight: 334,
    imageThmWidth: 480,
    imageThmHeight: 321,
    name: "Kunstmuseum Winterthur",
    nickname: "The Winterthur Museum of Art",
    dateFirstOpened: "a1915",
    streetAddress: "Museumstrasse 52",
    city: "Winterthur",
    state: "",
    postalCode: "8400",
    country: "Switzerland",
    coorN: 475016929,
    coorE: 87282099,
    website: "www.kmw.ch",
    wikiPage: "https://en.wikipedia.org/wiki/Kunstmuseum_Winterthur",
  },
  {
    easyId: "lacma",
    imageMaxWidth: 4320,
    imageMaxHeight: 3477,
    imageOptWidth: 1920,
    imageOptHeight: 1545,
    imageThmWidth: 480,
    imageThmHeight: 386,
    name: "Los Angeles County Museum of Art",
    nickname: "LACMA",
    dateFirstOpened: "a1910",
    streetAddress: "5905 Wilshire Boulevard",
    city: "Los Angeles",
    state: "CA",
    postalCode: "90036",
    country: "USA",
    coorN: 340639323,
    coorE: -1183614180,
    website: "www.lacma.org",
    wikiPage: "https://en.wikipedia.org/wiki/Los_Angeles_County_Museum_of_Art",
  },
  {
    easyId: "landes",
    imageMaxWidth: 2000,
    imageMaxHeight: 1334,
    imageOptWidth: 1920,
    imageOptHeight: 1281,
    imageThmWidth: 480,
    imageThmHeight: 320,
    name: "Niedersächsisches Landesmuseum Hannover",
    nickname: "Lower Saxony State Museum",
    dateFirstOpened: "a1856",
    streetAddress: "Willy-Brandt-Allee 5",
    city: "Hannover",
    state: "",
    postalCode: "30169",
    country: "Germany",
    coorN: 523654877,
    coorE: 97379798,
    website: "www.landesmuseum-hannover.de",
    wikiPage: "https://en.wikipedia.org/wiki/Lower_Saxony_State_Museum",
  },
  {
    easyId: "louvre",
    imageMaxWidth: 3048,
    imageMaxHeight: 1209,
    imageOptWidth: 1920,
    imageOptHeight: 762,
    imageThmWidth: 480,
    imageThmHeight: 190,
    name: "Musée du Louvre",
    nickname: "Louvre",
    dateFirstOpened: "a1793",
    streetAddress: "Rue de Rivoli",
    city: "Paris",
    state: "",
    postalCode: "75001",
    country: "France",
    coorN: 488606111,
    coorE: 23354553,
    website: "www.louvre.fr",
    wikiPage: "https://en.wikipedia.org/wiki/Louvre",
  },
  {
    easyId: "mctm",
    imageMaxWidth: 4608,
    imageMaxHeight: 3072,
    imageOptWidth: 1280,
    imageOptHeight: 1920,
    imageThmWidth: 320,
    imageThmHeight: 480,
    name: "Museo Carmen Thyssen - Málaga",
    nickname: "Carmen Thyssen Museum",
    dateFirstOpened: "a2011-03-24",
    streetAddress: "Calle Compañía, 10",
    city: "Málaga",
    state: "",
    postalCode: "29008",
    country: "Spain",
    coorN: 367214101,
    coorE: -44251812,
    website: "www.carmenthyssenmalaga.org",
    wikiPage: "https://en.wikipedia.org/wiki/Carmen_Thyssen_Museum",
  },
  {
    easyId: "mdbk",
    imageMaxWidth: 1632,
    imageMaxHeight: 1224,
    imageOptWidth: 1632,
    imageOptHeight: 1224,
    imageThmWidth: 480,
    imageThmHeight: 360,
    name: "Museum der bildenden Künste",
    nickname: "Leipzip Art Museum",
    dateFirstOpened: "a1848",
    streetAddress: "Katharinenstraße 10",
    city: "Leipzig",
    state: "",
    postalCode: "4109",
    country: "Germany",
    coorN: 513426785,
    coorE: 123736237,
    website: "mdbk.de",
    wikiPage: "https://en.wikipedia.org/wiki/Museum_der_bildenden_K%C3%BCnste",
  },
  {
    easyId: "met",
    imageMaxWidth: 6000,
    imageMaxHeight: 4000,
    imageOptWidth: 1920,
    imageOptHeight: 1280,
    imageThmWidth: 480,
    imageThmHeight: 320,
    name: "Metropolitan Museum of Art",
    nickname: "Met",
    dateFirstOpened: "a1870-04-13",
    streetAddress: "1000 Fifth Avenue",
    city: "New York",
    state: "NY",
    postalCode: "10028",
    country: "USA",
    coorN: 407794366,
    coorE: -739654327,
    website: "www.metmuseum.org",
    wikiPage: "https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art",
  },
  {
    easyId: "mfa",
    imageMaxWidth: 4608,
    imageMaxHeight: 2086,
    imageOptWidth: 1920,
    imageOptHeight: 869,
    imageThmWidth: 480,
    imageThmHeight: 217,
    name: "Museum of Fine Arts, Boston",
    nickname: "MFA",
    dateFirstOpened: "a1870",
    streetAddress: "465 Huntington Avenue",
    city: "Boston",
    state: "MA",
    postalCode: "2115",
    country: "USA",
    coorN: 423393810,
    coorE: -710962367,
    website: "mfa.org",
    wikiPage: "https://en.wikipedia.org/wiki/Museum_of_Fine_Arts,_Boston",
  },
  {
    easyId: "mia",
    imageMaxWidth: 3000,
    imageMaxHeight: 1988,
    imageOptWidth: 1920,
    imageOptHeight: 1272,
    imageThmWidth: 480,
    imageThmHeight: 318,
    name: "Minneapolis Institute of Art",
    nickname: "Mia",
    dateFirstOpened: "a1883",
    streetAddress: "2400 Third Avenue South",
    city: "Minneapolis",
    state: "MN",
    postalCode: "55404",
    country: "USA",
    coorN: 449585390,
    coorE: -932763935,
    website: "artsmia.org",
    wikiPage: "https://en.wikipedia.org/wiki/Minneapolis_Institute_of_Art",
  },
  {
    easyId: "moma",
    imageMaxWidth: 1536,
    imageMaxHeight: 2048,
    imageOptWidth: 1440,
    imageOptHeight: 1920,
    imageThmWidth: 360,
    imageThmHeight: 480,
    name: "Museum of Modern Art",
    nickname: "MoMa",
    dateFirstOpened: "a1929",
    streetAddress: "11 West 53rd Street",
    city: "New York",
    state: "NY",
    postalCode: "10019",
    country: "USA",
    coorN: 407614327,
    coorE: -739798103,
    website: "www.moma.org",
    wikiPage: "https://en.wikipedia.org/wiki/Museum_of_Modern_Art",
  },
  {
    easyId: "na",
    imageMaxWidth: 1174,
    imageMaxHeight: 2619,
    imageOptWidth: 861,
    imageOptHeight: 1920,
    imageThmWidth: 215,
    imageThmHeight: 480,
    name: "National Academy of Design",
    nickname: "National Academy of Design",
    dateFirstOpened: "a1863",
    streetAddress: "1083 5th Ave",
    city: "New York",
    state: "NY",
    postalCode: "10128",
    country: "USA",
    coorN: 407836876,
    coorE: -739607754,
    website: "www.nationalacademy.org",
    wikiPage: "https://en.wikipedia.org/wiki/National_Academy_of_Design",
  },
  {
    easyId: "nga",
    imageMaxWidth: 5716,
    imageMaxHeight: 4232,
    imageOptWidth: 1920,
    imageOptHeight: 1422,
    imageThmWidth: 480,
    imageThmHeight: 355,
    name: "National Gallery of Art",
    nickname: "National Gallery",
    dateFirstOpened: "a1937",
    streetAddress: "6th and Constitution Avenue NW",
    city: "Washington",
    state: "DC",
    postalCode: "20565",
    country: "USA",
    coorN: 388912980,
    coorE: -770221537,
    website: "www.nga.gov",
    wikiPage: "https://en.wikipedia.org/wiki/National_Gallery_of_Art",
  },
  {
    easyId: "phili",
    imageMaxWidth: 1920,
    imageMaxHeight: 779,
    imageOptWidth: 1920,
    imageOptHeight: 779,
    imageThmWidth: 480,
    imageThmHeight: 195,
    name: "Philadelphia Museum of Art",
    nickname: "Philadelphia Museum of Art",
    dateFirstOpened: "a1876",
    streetAddress: "2600 Benjamin Franklin Parkway",
    city: "Philadelphia",
    state: "PA",
    postalCode: "19130",
    country: "USA",
    coorN: 399655697,
    coorE: -751831548,
    website: "www.philamuseum.org",
    wikiPage: "https://en.wikipedia.org/wiki/Philadelphia_Museum_of_Art",
  },
  {
    easyId: "prado",
    imageMaxWidth: 6000,
    imageMaxHeight: 4000,
    imageOptWidth: 1920,
    imageOptHeight: 1280,
    imageThmWidth: 480,
    imageThmHeight: 320,
    name: "Museo del Prado",
    nickname: "Prado Museum",
    dateFirstOpened: "a1819",
    streetAddress: "Paseo del Prado",
    city: "Madrid",
    state: "",
    postalCode: "28014",
    country: "Spain",
    coorN: 404137818,
    coorE: -36943158,
    website: "www.museodelprado.es",
    wikiPage: "https://en.wikipedia.org/wiki/Museo_del_Prado",
  },
  {
    easyId: "rct",
    imageMaxWidth: 3100,
    imageMaxHeight: 4317,
    imageOptWidth: 1379,
    imageOptHeight: 1920,
    imageThmWidth: 345,
    imageThmHeight: 480,
    name: "Royal Collection Trust",
    nickname: "Royal Collection Trust",
    dateFirstOpened: "a1993",
    streetAddress: "York House, St James's Palace,",
    city: "London",
    state: "",
    postalCode: "SW1A 1BQ",
    country: "UK",
    coorN: 515046390,
    coorE: -1399074,
    website: "www.rct.uk",
    wikiPage: "https://en.wikipedia.org/wiki/Royal_Collection_Trust",
  },
  {
    easyId: "rijks",
    imageMaxWidth: 3872,
    imageMaxHeight: 2400,
    imageOptWidth: 1920,
    imageOptHeight: 1190,
    imageThmWidth: 480,
    imageThmHeight: 298,
    name: "Rijksmuseum",
    nickname: "Rijksmuseum",
    dateFirstOpened: "a1800-05-31",
    streetAddress: "Museumstraat 1",
    city: "Amsterdam",
    state: "",
    postalCode: "1017",
    country: "Netherlands",
    coorN: 523599976,
    coorE: 48830301,
    website: "www.rijksmuseum.n",
    wikiPage: "https://en.wikipedia.org/wiki/Rijksmuseum",
  },
  {
    easyId: "saam",
    imageMaxWidth: 9672,
    imageMaxHeight: 2850,
    imageOptWidth: 1920,
    imageOptHeight: 566,
    imageThmWidth: 480,
    imageThmHeight: 141,
    name: "Smithsonian American Art Museum",
    nickname: "SAAM",
    dateFirstOpened: "a1829",
    streetAddress: "8th & F Streets NW",
    city: "Washington",
    state: "DC",
    postalCode: "20004",
    country: "USA",
    coorN: 388978609,
    coorE: -770251306,
    website: "americanart.si.edu",
    wikiPage: "https://en.wikipedia.org/wiki/Smithsonian_American_Art_Museum",
  },
  {
    easyId: "smb",
    imageMaxWidth: 4674,
    imageMaxHeight: 3216,
    imageOptWidth: 1920,
    imageOptHeight: 1321,
    imageThmWidth: 480,
    imageThmHeight: 330,
    name: "Alte Nationalgalerie",
    nickname: "Alte Nationalgalerie",
    dateFirstOpened: "a1861",
    streetAddress: "Bodestrasse 1-3",
    city: "Berlin",
    state: "",
    postalCode: "D-10178",
    country: "Germany",
    coorN: 525208104,
    coorE: 133961642,
    website: "www.smb.museum",
    wikiPage: "https://en.wikipedia.org/wiki/Alte_Nationalgalerie",
  },
  {
    easyId: "sorolla",
    imageMaxWidth: 2740,
    imageMaxHeight: 2159,
    imageOptWidth: 1920,
    imageOptHeight: 1513,
    imageThmWidth: 480,
    imageThmHeight: 378,
    name: "Museo Sorolla",
    nickname: "Museum Sorolla",
    dateFirstOpened: "a1962",
    streetAddress: "Paseo del General Martínez Campos, 37",
    city: "Madrid",
    state: "",
    postalCode: "28010",
    country: "Spain",
    coorN: 404354555,
    coorE: -36947058,
    website: "museosorolla.mcu.es",
    wikiPage: "https://en.wikipedia.org/wiki/Sorolla_Museum",
  },
  {
    easyId: "taft",
    imageMaxWidth: 1897,
    imageMaxHeight: 1419,
    imageOptWidth: 1897,
    imageOptHeight: 1419,
    imageThmWidth: 480,
    imageThmHeight: 359,
    name: "Taft Museum of Art",
    nickname: "Taft Museum of Art",
    dateFirstOpened: "a1932",
    streetAddress: "316 Pike Street",
    city: "Cincinnati",
    state: "OH",
    postalCode: "45202",
    country: "USA",
    coorN: 391021235,
    coorE: -845048253,
    website: "taftmuseum.org",
    wikiPage: "https://en.wikipedia.org/wiki/Taft_Museum_of_Art",
  },
  {
    easyId: "tate",
    imageMaxWidth: 4744,
    imageMaxHeight: 3452,
    imageOptWidth: 1920,
    imageOptHeight: 1397,
    imageThmWidth: 480,
    imageThmHeight: 349,
    name: "Tate Britain",
    nickname: "Tate",
    dateFirstOpened: "a1897",
    streetAddress: "Millbank",
    city: "London",
    state: "",
    postalCode: "SW1",
    country: "UK",
    coorN: 514910621,
    coorE: -1299773,
    website: "tate.org.uk",
    wikiPage: "https://en.wikipedia.org/wiki/Tate_Britain",
  },
  {
    easyId: "ukng",
    imageMaxWidth: 5278,
    imageMaxHeight: 3519,
    imageOptWidth: 1920,
    imageOptHeight: 1280,
    imageThmWidth: 480,
    imageThmHeight: 320,
    name: "National Gallery",
    nickname: "National Gallery of England",
    dateFirstOpened: "a1824",
    streetAddress: "Trafalgar Square",
    city: "London",
    state: "",
    postalCode: "WC2",
    country: "UK",
    coorN: 515089290,
    coorE: -1304877,
    website: "www.nationalgallery.org.uk",
    wikiPage: "https://en.wikipedia.org/wiki/National_Gallery",
  },
  {
    easyId: "vg",
    imageMaxWidth: 4272,
    imageMaxHeight: 2848,
    imageOptWidth: 1920,
    imageOptHeight: 1280,
    imageThmWidth: 480,
    imageThmHeight: 320,
    name: "Van Gogh Museum",
    nickname: "Van Gogh Museum",
    dateFirstOpened: "a1972-06-02",
    streetAddress: "Paulus Potterstraat 7",
    city: "Amsterdam",
    state: "",
    postalCode: "1017",
    country: "Netherlands",
    coorN: 523584159,
    coorE: 48788869,
    website: "www.vangoghmuseum.nl",
    wikiPage: "https://en.wikipedia.org/wiki/Van_Gogh_Museum",
  },
  {
    easyId: "wh",
    imageMaxWidth: 4420,
    imageMaxHeight: 2563,
    imageOptWidth: 1920,
    imageOptHeight: 1113,
    imageThmWidth: 480,
    imageThmHeight: 278,
    name: "White House",
    nickname: "White House",
    dateFirstOpened: "a1800",
    streetAddress: "1600 Pennsylvania Avenue NW",
    city: "Washington",
    state: "DC",
    postalCode: "20500",
    country: "USA",
    coorN: 388976763,
    coorE: -770387185,
    website: "www.whitehousehistory.org",
    wikiPage: "https://en.wikipedia.org/wiki/White_House",
  },
  {
    easyId: "yale",
    imageMaxWidth: 1802,
    imageMaxHeight: 1878,
    imageOptWidth: 1802,
    imageOptHeight: 1878,
    imageThmWidth: 461,
    imageThmHeight: 480,
    name: "Yale University Art Gallery",
    nickname: "Yale University Art Gallery",
    dateFirstOpened: "a1832",
    streetAddress: "1111 Chapel Street",
    city: "New Haven",
    state: "CT",
    postalCode: "6510",
    country: "USA",
    coorN: 413083900,
    coorE: -729331467,
    website: "artgallery.yale.edu",
    wikiPage: "https://en.wikipedia.org/wiki/Yale_University_Art_Gallery",
  },
];

export { locations };