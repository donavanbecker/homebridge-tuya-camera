import { PlatformConfig } from 'homebridge';
/**
 * This is the name of the platform that users will use to register the plugin in the Homebridge config.json
 */
export const PLATFORM_NAME = 'TuyaCamera';

/**
 * This must match the name of your plugin as defined the package.json
 */
export const PLUGIN_NAME = 'homebridge-tuya-camera';

/**
 * this is the base URL
 */
export const DeviceURL = 'https://';


//Config
export interface TuyaCameraPlatformConfig extends PlatformConfig {
  username?: string;
  password?: string;
  accessId?: string;
  accessKey?: string;
  lang?: string;
  projectType?: string;
  appSchema?: string;
  countryCode?: number;
  debug?: string;
}

export type device = {
  deviceId: string;
  hubDeviceId: string;
  active_time: number,
  biz_type: number,
  category: string,
  create_time: number,
  id: string,
  ip: string,
  lat: string,
  local_key: string,
  lon: string,
  model: string,
  name: string,
  online: boolean,
  owner_id: string,
  product_id: string,
  product_name: string,
  status: status
  sub: boolean,
  time_zone: string,
  uid: string,
  update_time: number,
  uuid: string,
}

type status = Array<{
  code: string;
  value: string;
}>;

export type deviceStatusResponse = {
  result?: {
    url?: string,
  },
  success?: true,
  t?: number
}

export type payload = {
  commandType: any;
  command: any;
  parameter: any;
}

const AMERICA = 'https://openapi.tuyaus.com';
const EUROPE = 'https://openapi.tuyaeu.com';
const INDIA = 'https://openapi.tuyain.com';
const CHINA = 'https://openapi.tuyacn.com';

const TUYA_COUNTRIES = [
  { 'country': 'Afghanistan', 'countryCode': '93', 'endPoint': EUROPE },
  { 'country': 'Albania', 'countryCode': '355', 'endPoint': EUROPE },
  { 'country': 'Algeria', 'countryCode': '213', 'endPoint': EUROPE },
  { 'country': 'American Samoa', 'countryCode': '1684', 'endPoint': EUROPE },
  { 'country': 'Andorra', 'countryCode': '376', 'endPoint': EUROPE },
  { 'country': 'Angola', 'countryCode': '244', 'endPoint': EUROPE },
  { 'country': 'Anguilla', 'countryCode': '1264', 'endPoint': EUROPE },
  { 'country': 'Antarctica', 'countryCode': '672', 'endPoint': AMERICA },
  { 'country': 'Antigua and Barbuda', 'countryCode': '1268', 'endPoint': EUROPE },
  { 'country': 'Argentina', 'countryCode': '54', 'endPoint': AMERICA },
  { 'country': 'Armenia', 'countryCode': '374', 'endPoint': EUROPE },
  { 'country': 'Aruba', 'countryCode': '297', 'endPoint': EUROPE },
  { 'country': 'Australia', 'countryCode': '61', 'endPoint': EUROPE },
  { 'country': 'Austria', 'countryCode': '43', 'endPoint': EUROPE },
  { 'country': 'Azerbaijan', 'countryCode': '994', 'endPoint': EUROPE },
  { 'country': 'Bahamas', 'countryCode': '1242', 'endPoint': EUROPE },
  { 'country': 'Bahrain', 'countryCode': '973', 'endPoint': EUROPE },
  { 'country': 'Bangladesh', 'countryCode': '880', 'endPoint': EUROPE },
  { 'country': 'Barbados', 'countryCode': '1246', 'endPoint': EUROPE },
  { 'country': 'Belarus', 'countryCode': '375', 'endPoint': EUROPE },
  { 'country': 'Belgium', 'countryCode': '32', 'endPoint': EUROPE },
  { 'country': 'Belize', 'countryCode': '501', 'endPoint': EUROPE },
  { 'country': 'Benin', 'countryCode': '229', 'endPoint': EUROPE },
  { 'country': 'Bermuda', 'countryCode': '1441', 'endPoint': EUROPE },
  { 'country': 'Bhutan', 'countryCode': '975', 'endPoint': EUROPE },
  { 'country': 'Bolivia', 'countryCode': '591', 'endPoint': AMERICA },
  { 'country': 'Bosnia and Herzegovina', 'countryCode': '387', 'endPoint': EUROPE },
  { 'country': 'Botswana', 'countryCode': '267', 'endPoint': EUROPE },
  { 'country': 'Brazil', 'countryCode': '55', 'endPoint': AMERICA },
  { 'country': 'British Indian Ocean Territory', 'countryCode': '246', 'endPoint': AMERICA },
  { 'country': 'British Virgin Islands', 'countryCode': '1284', 'endPoint': EUROPE },
  { 'country': 'Brunei', 'countryCode': '673', 'endPoint': EUROPE },
  { 'country': 'Bulgaria', 'countryCode': '359', 'endPoint': EUROPE },
  { 'country': 'Burkina Faso', 'countryCode': '226', 'endPoint': EUROPE },
  { 'country': 'Burundi', 'countryCode': '257', 'endPoint': EUROPE },
  { 'country': 'Cabo Verde', 'countryCode': '238', 'endPoint': EUROPE },
  { 'country': 'Cambodia', 'countryCode': '855', 'endPoint': EUROPE },
  { 'country': 'Cameroon', 'countryCode': '237', 'endPoint': EUROPE },
  { 'country': 'Canada', 'countryCode': '1', 'endPoint': AMERICA },
  { 'country': 'Cayman Islands', 'countryCode': '1345', 'endPoint': EUROPE },
  { 'country': 'Central African Republic', 'countryCode': '236', 'endPoint': EUROPE },
  { 'country': 'Chad', 'countryCode': '235', 'endPoint': EUROPE },
  { 'country': 'Chile', 'countryCode': '56', 'endPoint': AMERICA },
  { 'country': 'China', 'countryCode': '86', 'endPoint': CHINA },
  { 'country': 'Colombia', 'countryCode': '57', 'endPoint': AMERICA },
  { 'country': 'Comoros', 'countryCode': '269', 'endPoint': EUROPE },
  { 'country': 'Cook Islands', 'countryCode': '682', 'endPoint': AMERICA },
  { 'country': 'Costa Rica', 'countryCode': '506', 'endPoint': EUROPE },
  { 'country': 'Croatia', 'countryCode': '385', 'endPoint': EUROPE },
  { 'country': 'Curacao', 'countryCode': '5999', 'endPoint': AMERICA },
  { 'country': 'Cyprus', 'countryCode': '357', 'endPoint': EUROPE },
  { 'country': 'Czech Republic', 'countryCode': '420', 'endPoint': EUROPE },
  { 'country': 'Côte d’Ivoire', 'countryCode': '225', 'endPoint': EUROPE },
  { 'country': 'Democratic Republic of the Congo', 'countryCode': '243', 'endPoint': EUROPE },
  { 'country': 'Denmark', 'countryCode': '45', 'endPoint': EUROPE },
  { 'country': 'Djibouti', 'countryCode': '253', 'endPoint': EUROPE },
  { 'country': 'Dominica', 'countryCode': '1767', 'endPoint': EUROPE },
  { 'country': 'Dominican Republic (1-809)', 'countryCode': '1809', 'endPoint': AMERICA },
  { 'country': 'Dominican Republic (1-829)', 'countryCode': '1829', 'endPoint': AMERICA },
  { 'country': 'Dominican Republic (1-849)', 'countryCode': '1849', 'endPoint': AMERICA },
  { 'country': 'East Timor', 'countryCode': '670', 'endPoint': AMERICA },
  { 'country': 'Ecuador', 'countryCode': '593', 'endPoint': AMERICA },
  { 'country': 'Egypt', 'countryCode': '20', 'endPoint': EUROPE },
  { 'country': 'El Salvador', 'countryCode': '503', 'endPoint': EUROPE },
  { 'country': 'Equatorial Guinea', 'countryCode': '240', 'endPoint': EUROPE },
  { 'country': 'Eritrea', 'countryCode': '291', 'endPoint': EUROPE },
  { 'country': 'Estonia', 'countryCode': '372', 'endPoint': EUROPE },
  { 'country': 'Ethiopia', 'countryCode': '251', 'endPoint': EUROPE },
  { 'country': 'Falkland Islands', 'countryCode': '500', 'endPoint': AMERICA },
  { 'country': 'Faroe Islands', 'countryCode': '298', 'endPoint': EUROPE },
  { 'country': 'Fiji', 'countryCode': '679', 'endPoint': EUROPE },
  { 'country': 'Finland', 'countryCode': '358', 'endPoint': EUROPE },
  { 'country': 'France', 'countryCode': '33', 'endPoint': EUROPE },
  { 'country': 'French Guiana', 'countryCode': '594', 'endPoint': AMERICA },
  { 'country': 'French Polynesia', 'countryCode': '689', 'endPoint': EUROPE },
  { 'country': 'Gabon', 'countryCode': '241', 'endPoint': EUROPE },
  { 'country': 'Gambia', 'countryCode': '220', 'endPoint': EUROPE },
  { 'country': 'Georgia', 'countryCode': '995', 'endPoint': EUROPE },
  { 'country': 'Germany', 'countryCode': '49', 'endPoint': EUROPE },
  { 'country': 'Ghana', 'countryCode': '233', 'endPoint': EUROPE },
  { 'country': 'Gibraltar', 'countryCode': '350', 'endPoint': EUROPE },
  { 'country': 'Greece', 'countryCode': '30', 'endPoint': EUROPE },
  { 'country': 'Greenland', 'countryCode': '299', 'endPoint': EUROPE },
  { 'country': 'Grenada', 'countryCode': '1473', 'endPoint': EUROPE },
  { 'country': 'Guam', 'countryCode': '1671', 'endPoint': EUROPE },
  { 'country': 'Guatemala', 'countryCode': '502', 'endPoint': AMERICA },
  { 'country': 'Guinea', 'countryCode': '224', 'endPoint': EUROPE },
  { 'country': 'Guinea-Bissau', 'countryCode': '245', 'endPoint': AMERICA },
  { 'country': 'Guyana', 'countryCode': '592', 'endPoint': EUROPE },
  { 'country': 'Haiti', 'countryCode': '509', 'endPoint': EUROPE },
  { 'country': 'Honduras', 'countryCode': '504', 'endPoint': EUROPE },
  { 'country': 'Hong Kong', 'countryCode': '852', 'endPoint': AMERICA },
  { 'country': 'Hungary', 'countryCode': '36', 'endPoint': EUROPE },
  { 'country': 'Iceland', 'countryCode': '354', 'endPoint': EUROPE },
  { 'country': 'India', 'countryCode': '91', 'endPoint': INDIA },
  { 'country': 'Indonesia', 'countryCode': '62', 'endPoint': AMERICA },
  { 'country': 'Iraq', 'countryCode': '964', 'endPoint': EUROPE },
  { 'country': 'Ireland', 'countryCode': '353', 'endPoint': EUROPE },
  { 'country': 'Israel', 'countryCode': '972', 'endPoint': EUROPE },
  { 'country': 'Italy', 'countryCode': '39', 'endPoint': EUROPE },
  { 'country': 'Jamaica', 'countryCode': '1876', 'endPoint': EUROPE },
  { 'country': 'Japan', 'countryCode': '81', 'endPoint': AMERICA },
  { 'country': 'Jordan', 'countryCode': '962', 'endPoint': EUROPE },
  { 'country': 'Russia', 'countryCode': '7', 'endPoint': EUROPE },
  { 'country': 'Kenya', 'countryCode': '254', 'endPoint': EUROPE },
  { 'country': 'Kiribati', 'countryCode': '686', 'endPoint': AMERICA },
  { 'country': 'Kuwait', 'countryCode': '965', 'endPoint': EUROPE },
  { 'country': 'Kyrgyzstan', 'countryCode': '996', 'endPoint': EUROPE },
  { 'country': 'Laos', 'countryCode': '856', 'endPoint': EUROPE },
  { 'country': 'Latvia', 'countryCode': '371', 'endPoint': EUROPE },
  { 'country': 'Lebanon', 'countryCode': '961', 'endPoint': EUROPE },
  { 'country': 'Lesotho', 'countryCode': '266', 'endPoint': EUROPE },
  { 'country': 'Liberia', 'countryCode': '231', 'endPoint': EUROPE },
  { 'country': 'Libya', 'countryCode': '218', 'endPoint': EUROPE },
  { 'country': 'Liechtenstein', 'countryCode': '423', 'endPoint': EUROPE },
  { 'country': 'Lithuania', 'countryCode': '370', 'endPoint': EUROPE },
  { 'country': 'Luxembourg', 'countryCode': '352', 'endPoint': EUROPE },
  { 'country': 'Macao', 'countryCode': '853', 'endPoint': AMERICA },
  { 'country': 'Macedonia', 'countryCode': '389', 'endPoint': EUROPE },
  { 'country': 'Madagascar', 'countryCode': '261', 'endPoint': EUROPE },
  { 'country': 'Malawi', 'countryCode': '265', 'endPoint': EUROPE },
  { 'country': 'Malaysia', 'countryCode': '60', 'endPoint': AMERICA },
  { 'country': 'Maldives', 'countryCode': '960', 'endPoint': EUROPE },
  { 'country': 'Mali', 'countryCode': '223', 'endPoint': EUROPE },
  { 'country': 'Malta', 'countryCode': '356', 'endPoint': EUROPE },
  { 'country': 'Marshall Islands', 'countryCode': '692', 'endPoint': EUROPE },
  { 'country': 'Martinique', 'countryCode': '596', 'endPoint': EUROPE },
  { 'country': 'Mauritania', 'countryCode': '222', 'endPoint': EUROPE },
  { 'country': 'Mauritius', 'countryCode': '230', 'endPoint': EUROPE },
  { 'country': 'Mayotte', 'countryCode': '262', 'endPoint': EUROPE },
  { 'country': 'Mexico', 'countryCode': '52', 'endPoint': AMERICA },
  { 'country': 'Micronesia', 'countryCode': '691', 'endPoint': EUROPE },
  { 'country': 'Moldova', 'countryCode': '373', 'endPoint': EUROPE },
  { 'country': 'Monaco', 'countryCode': '377', 'endPoint': EUROPE },
  { 'country': 'Mongolia', 'countryCode': '976', 'endPoint': EUROPE },
  { 'country': 'Montenegro', 'countryCode': '382', 'endPoint': EUROPE },
  { 'country': 'Montserrat', 'countryCode': '1664', 'endPoint': EUROPE },
  { 'country': 'Morocco', 'countryCode': '212', 'endPoint': EUROPE },
  { 'country': 'Mozambique', 'countryCode': '258', 'endPoint': EUROPE },
  { 'country': 'Myanmar', 'countryCode': '95', 'endPoint': AMERICA },
  { 'country': 'Namibia', 'countryCode': '264', 'endPoint': EUROPE },
  { 'country': 'Nauru', 'countryCode': '674', 'endPoint': AMERICA },
  { 'country': 'Nepal', 'countryCode': '977', 'endPoint': EUROPE },
  { 'country': 'Netherlands', 'countryCode': '31', 'endPoint': EUROPE },
  { 'country': 'New Caledonia', 'countryCode': '687', 'endPoint': EUROPE },
  { 'country': 'New Zealand', 'countryCode': '64', 'endPoint': AMERICA },
  { 'country': 'Nicaragua', 'countryCode': '505', 'endPoint': EUROPE },
  { 'country': 'Niger', 'countryCode': '227', 'endPoint': EUROPE },
  { 'country': 'Nigeria', 'countryCode': '234', 'endPoint': EUROPE },
  { 'country': 'Niue', 'countryCode': '683', 'endPoint': AMERICA },
  { 'country': 'Northern Mariana Islands', 'countryCode': '1670', 'endPoint': EUROPE },
  { 'country': 'Norway', 'countryCode': '47', 'endPoint': EUROPE },
  { 'country': 'Oman', 'countryCode': '968', 'endPoint': EUROPE },
  { 'country': 'Pakistan', 'countryCode': '92', 'endPoint': EUROPE },
  { 'country': 'Palau', 'countryCode': '680', 'endPoint': EUROPE },
  { 'country': 'Palestine', 'countryCode': '970', 'endPoint': AMERICA },
  { 'country': 'Panama', 'countryCode': '507', 'endPoint': EUROPE },
  { 'country': 'Papua New Guinea', 'countryCode': '675', 'endPoint': AMERICA },
  { 'country': 'Paraguay', 'countryCode': '595', 'endPoint': AMERICA },
  { 'country': 'Peru', 'countryCode': '51', 'endPoint': AMERICA },
  { 'country': 'Philippines', 'countryCode': '63', 'endPoint': AMERICA },
  { 'country': 'Poland', 'countryCode': '48', 'endPoint': EUROPE },
  { 'country': 'Portugal', 'countryCode': '351', 'endPoint': EUROPE },
  { 'country': 'Puerto Rico', 'countryCode': '1787', 'endPoint': AMERICA },
  { 'country': 'Qatar', 'countryCode': '974', 'endPoint': EUROPE },
  { 'country': 'Republic of the Congo', 'countryCode': '242', 'endPoint': EUROPE },
  { 'country': 'Reunion', 'countryCode': '262', 'endPoint': EUROPE },
  { 'country': 'Romania', 'countryCode': '40', 'endPoint': EUROPE },
  { 'country': 'Russia', 'countryCode': '7', 'endPoint': EUROPE },
  { 'country': 'Rwanda', 'countryCode': '250', 'endPoint': EUROPE },
  { 'country': 'Saint Kitts and Nevis', 'countryCode': '1869', 'endPoint': EUROPE },
  { 'country': 'Saint Lucia', 'countryCode': '1758', 'endPoint': EUROPE },
  { 'country': 'Saint Martin', 'countryCode': '590', 'endPoint': EUROPE },
  { 'country': 'Saint Pierre and Miquelon', 'countryCode': '508', 'endPoint': EUROPE },
  { 'country': 'Saint Vincent and the Grenadines', 'countryCode': '1784', 'endPoint': EUROPE },
  { 'country': 'Samoa', 'countryCode': '685', 'endPoint': EUROPE },
  { 'country': 'San Marino', 'countryCode': '378', 'endPoint': EUROPE },
  { 'country': 'Saudi Arabia', 'countryCode': '966', 'endPoint': EUROPE },
  { 'country': 'Sao Tome and Principe', 'countryCode': '239', 'endPoint': AMERICA },
  { 'country': 'Senegal', 'countryCode': '221', 'endPoint': EUROPE },
  { 'country': 'Serbia', 'countryCode': '381', 'endPoint': EUROPE },
  { 'country': 'Seychelles', 'countryCode': '248', 'endPoint': EUROPE },
  { 'country': 'Sierra Leone', 'countryCode': '232', 'endPoint': EUROPE },
  { 'country': 'Singapore', 'countryCode': '65', 'endPoint': EUROPE },
  { 'country': 'Sint Maarten', 'countryCode': '1721', 'endPoint': AMERICA },
  { 'country': 'Slovakia', 'countryCode': '421', 'endPoint': EUROPE },
  { 'country': 'Slovenia', 'countryCode': '386', 'endPoint': EUROPE },
  { 'country': 'Solomon Islands', 'countryCode': '677', 'endPoint': AMERICA },
  { 'country': 'Somalia', 'countryCode': '252', 'endPoint': EUROPE },
  { 'country': 'South Africa', 'countryCode': '27', 'endPoint': EUROPE },
  { 'country': 'South Korea', 'countryCode': '82', 'endPoint': AMERICA },
  { 'country': 'Spain', 'countryCode': '34', 'endPoint': EUROPE },
  { 'country': 'Sri Lanka', 'countryCode': '94', 'endPoint': EUROPE },
  { 'country': 'Suriname', 'countryCode': '597', 'endPoint': AMERICA },
  { 'country': 'Svalbard and Jan Mayen', 'countryCode': '4779', 'endPoint': AMERICA },
  { 'country': 'Swaziland', 'countryCode': '268', 'endPoint': EUROPE },
  { 'country': 'Sweden', 'countryCode': '46', 'endPoint': EUROPE },
  { 'country': 'Switzerland', 'countryCode': '41', 'endPoint': EUROPE },
  { 'country': 'Taiwan', 'countryCode': '886', 'endPoint': AMERICA },
  { 'country': 'Tajikistan', 'countryCode': '992', 'endPoint': EUROPE },
  { 'country': 'Tanzania', 'countryCode': '255', 'endPoint': EUROPE },
  { 'country': 'Thailand', 'countryCode': '66', 'endPoint': AMERICA },
  { 'country': 'Togo', 'countryCode': '228', 'endPoint': EUROPE },
  { 'country': 'Tokelau', 'countryCode': '690', 'endPoint': AMERICA },
  { 'country': 'Tonga', 'countryCode': '676', 'endPoint': EUROPE },
  { 'country': 'Trinidad and Tobago', 'countryCode': '1868', 'endPoint': EUROPE },
  { 'country': 'Tunisia', 'countryCode': '216', 'endPoint': EUROPE },
  { 'country': 'Turkey', 'countryCode': '90', 'endPoint': EUROPE },
  { 'country': 'Turkmenistan', 'countryCode': '993', 'endPoint': EUROPE },
  { 'country': 'Turks and Caicos Islands', 'countryCode': '1649', 'endPoint': EUROPE },
  { 'country': 'Tuvalu', 'countryCode': '688', 'endPoint': EUROPE },
  { 'country': 'U.S. Virgin Islands', 'countryCode': '1340', 'endPoint': EUROPE },
  { 'country': 'Uganda', 'countryCode': '256', 'endPoint': EUROPE },
  { 'country': 'Ukraine', 'countryCode': '380', 'endPoint': EUROPE },
  { 'country': 'United Arab Emirates', 'countryCode': '971', 'endPoint': EUROPE },
  { 'country': 'United Kingdom', 'countryCode': '44', 'endPoint': EUROPE },
  { 'country': 'Uruguay', 'countryCode': '598', 'endPoint': AMERICA },
  { 'country': 'Uzbekistan', 'countryCode': '998', 'endPoint': EUROPE },
  { 'country': 'Vanuatu', 'countryCode': '678', 'endPoint': AMERICA },
  { 'country': 'Vatican', 'countryCode': '379', 'endPoint': EUROPE },
  { 'country': 'Venezuela', 'countryCode': '58', 'endPoint': AMERICA },
  { 'country': 'Vietnam', 'countryCode': '84', 'endPoint': AMERICA },
  { 'country': 'Wallis and Futuna', 'countryCode': '681', 'endPoint': EUROPE },
  { 'country': 'Western Sahara', 'countryCode': '212', 'endPoint': EUROPE },
  { 'country': 'Yemen', 'countryCode': '967', 'endPoint': EUROPE },
  { 'country': 'Zambia', 'countryCode': '260', 'endPoint': EUROPE },
  { 'country': 'Zimbabwe', 'countryCode': '263', 'endPoint': EUROPE },
  { 'country': 'Åland Islands', 'countryCode': '35818', 'endPoint': AMERICA },
];

export class CountryUtil {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  getEndPointWithCountryCode(code: string | number) {
    const item = TUYA_COUNTRIES.find(item => {
      return item.countryCode === code;
    });
    return item ? item.endPoint : AMERICA;
  }
}