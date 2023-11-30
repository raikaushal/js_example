const countries = {
  en: [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    ["People's Republic of China", "China"],
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    ["Republic of the Congo", "Congo"],
    ["Democratic Republic of the Congo", "Congo"],
    "Cook Islands",
    "Costa Rica",
    ["Cote D'Ivoire", "Ivory Coast"],
    "Croatia",
    "Cuba",
    "Cyprus",
    ["Czech Republic", "Czechia"],
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    ["Republic of The Gambia", "The Gambia", "Gambia"],
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (Vatican City State)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    ["Islamic Republic of Iran", "Iran"],
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "North Korea",
    ["South Korea", "Korea, Republic of", "Republic of Korea"],
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    ["The Republic of North Macedonia", "North Macedonia"],
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    ["State of Palestine", "Palestine"],
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    ["Russian Federation", "Russia"],
    "Rwanda",
    "Saint Helena",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Eswatini",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    ["Taiwan, Province of China", "Taiwan"],
    "Tajikistan",
    ["United Republic of Tanzania", "Tanzania"],
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    ["Türkiye", "Turkey"],
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    ["United Kingdom", "UK", "Great Britain"],
    [
      "United States of America",
      "United States",
      "USA",
      "U.S.A.",
      "US",
      "U.S.",
    ],
    "United States Minor Outlying Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Virgin Islands, British",
    "Virgin Islands, U.S.",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands",
    "Bonaire, Sint Eustatius and Saba",
    "Curaçao",
    "Guernsey",
    "Isle of Man",
    "Jersey",
    "Montenegro",
    "Saint Barthélemy",
    "Saint Martin (French part)",
    "Serbia",
    "Sint Maarten (Dutch part)",
    "South Sudan",
    "Kosovo",
  ],
  fr: [
    "Afghanistan",
    "Albanie",
    "Algérie",
    "Samoa américaines",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan",
    "Bahamas",
    "Bahreïn",
    "Bangladesh",
    "Barbade",
    "Biélorussie",
    "Belgique",
    "Belize",
    "Bénin",
    "Bermudes",
    "Bhoutan",
    "Bolivie",
    "Bosnie-Herzégovine",
    "Botswana",
    "Île Bouvet",
    "Brésil",
    "Océan Indien Britannique",
    "Brunei Darussalam",
    "Bulgarie",
    "Burkina Faso",
    "Burundi",
    "Cambodge",
    "Cameroun",
    "Canada",
    "Cap-Vert",
    "Îles Caïmans",
    "République Centrafricaine",
    "Tchad",
    "Chili",
    "Chine",
    "Île Christmas",
    "Îles Cocos",
    "Colombie",
    "Comores",
    "République du Congo",
    "République démocratique du Congo",
    "Îles Cook",
    "Costa Rica",
    "Côte-d'Ivoire",
    "Croatie",
    "Cuba",
    "Chypre",
    "République Tchèque",
    "Danemark",
    "Djibouti",
    "Dominique",
    "République Dominicaine",
    "Équateur",
    "Égypte",
    "El Salvador",
    "Guinée équatoriale",
    "Érythrée",
    "Estonie",
    "Éthiopie",
    "Îles Malouines",
    "Îles Féroé",
    "Fidji",
    "Finlande",
    "France",
    "Guyane française",
    "Polynésie française",
    "Terres australes françaises",
    "Gabon",
    "Gambie",
    "Géorgie",
    "Allemagne",
    "Ghana",
    "Gibraltar",
    "Grèce",
    "Groenland",
    "Grenade",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinée",
    "Guinée-Bissau",
    "Guyana",
    "Haïti",
    "Îles Heard-et-MacDonald",
    "Saint-Siège (Vatican)",
    "Honduras",
    "Hong Kong",
    "Hongrie",
    "Islande",
    "Inde",
    "Indonésie",
    "Iran",
    "Irak",
    "Irlande",
    "Israël",
    "Italie",
    "Jamaïque",
    "Japon",
    "Jordanie",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Corée du Nord",
    "Corée du Sud",
    "Koweït",
    "Kirghizistan",
    "Laos",
    "Lettonie",
    "Liban",
    "Lesotho",
    "Libéria",
    "Libye",
    "Liechtenstein",
    "Lituanie",
    "Luxembourg",
    "Macao",
    "Macédoine du Nord",
    "Madagascar",
    "Malawi",
    "Malaisie",
    "Maldives",
    "Mali",
    "Malte",
    "Îles Marshall",
    "Martinique",
    "Mauritanie",
    "Maurice",
    "Mayotte",
    "Mexique",
    "Micronésie",
    "Moldavie",
    "Monaco",
    "Mongolie",
    "Montserrat",
    "Maroc",
    "Mozambique",
    "Myanmar",
    "Namibie",
    "Nauru",
    "Népal",
    "Pays-Bas",
    "Nouvelle-Calédonie",
    "Nouvelle-Zélande",
    "Nicaragua",
    "Niger",
    "Nigéria",
    "Niué",
    "Île Norfolk",
    "Îles Mariannes du Nord",
    "Norvège",
    "Oman",
    "Pakistan",
    "Palaos",
    "Palestine",
    "Panama",
    "Papouasie-Nouvelle-Guinée",
    "Paraguay",
    "Pérou",
    "Philippines",
    "Îles Pitcairn",
    "Pologne",
    "Portugal",
    "Porto Rico",
    "Qatar",
    "Réunion",
    "Roumanie",
    "Russie",
    "Rwanda",
    "Sainte-Hélène",
    "Saint-Christophe-et-Niévès",
    "Sainte-Lucie",
    "Saint-Pierre-et-Miquelon",
    "Saint-Vincent-et-les-Grenadines",
    "Samoa",
    "Saint-Marin",
    "São Tomé-et-Principe",
    "Arabie Saoudite",
    "Sénégal",
    "Seychelles",
    "Sierra Leone",
    "Singapour",
    "Slovaquie",
    "Slovénie",
    "Îles Salomon",
    "Somalie",
    "Afrique du Sud",
    "Géorgie du Sud-et-les Îles Sandwich du Sud",
    "Espagne",
    "Sri Lanka",
    "Soudan",
    "Suriname",
    "Svalbard et Île Jan Mayen",
    "Royaume d'Eswatini",
    "Suède",
    "Suisse",
    "Syrie",
    "Taïwan",
    "Tadjikistan",
    "République unie de Tanzanie",
    "Thaïlande",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinité-et-Tobago",
    "Tunisie",
    "Turquie",
    "Turkménistan",
    "Îles Turques-et-Caïques",
    "Tuvalu",
    "Ouganda",
    "Ukraine",
    "Émirats Arabes Unis",
    "Royaume-Uni",
    "États-Unis d'Amérique",
    "Îles mineures éloignées des États-Unis",
    "Uruguay",
    "Ouzbékistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Îles vierges britanniques",
    "Îles vierges américaines",
    "Wallis-et-Futuna",
    "Sahara occidental",
    "Yémen",
    "Zambie",
    "Zimbabwe",
    "Åland",
    "Bonaire, Saint-Eustache et Saba",
    "Curaçao",
    "Guernesey",
    "Île de Man",
    "Jersey",
    "Monténégro",
    "Saint-Barthélemy",
    "Saint-Martin (partie française)",
    "Serbie",
    "Saint-Martin (partie néerlandaise)",
    "Soudan du Sud",
    "Kosovo",
  ],
};
