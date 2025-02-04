import type { LocaleDefinition } from '../..';
import address from './address';
import company from './company';
import date from './date';
import internet from './internet';
import lorem from './lorem';
import name from './name';
import phone_number from './phone_number';

const cz: LocaleDefinition = {
  title: 'Czech',
  address,
  company,
  date,
  internet,
  lorem,
  name,
  phone_number,
};

export default cz;
