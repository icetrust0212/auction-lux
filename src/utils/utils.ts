import currency from 'currency.js';
import { format, formatDistanceToNowStrict} from 'date-fns'

export const calcRemainingTime = (start_time?: string, end_time?: string): number => {
  let start = start_time ?  new Date(start_time).getTime() : new Date().getTime();
  let end = end_time ?  new Date(end_time).getTime() : new Date().getTime();
  return (end - start) / 1000;
}

export const getFormatedDate = (date: string | Date | undefined):string => {
  if (!date) {
    date = new Date();
  }
  return format(new Date(date), 'MM / dd / yy');
}

export const getDiff = (date: string | undefined) => {
  if (!date) return '';

  let result = formatDistanceToNowStrict(new Date(date), { roundingMethod: 'ceil', addSuffix:true});
  return result;
}

export const getShortCurrency = (value: string | number) : string => {
  value = currency(value).value;
  let precision = value % 1 === 0 ? 0 : 2;
  if (value > 1000000) {
    return currency(value/1000000, {separator: ',', precision}).format() + 'M';
  } else if (value >= 1000) {
    return currency(value/1000, {separator: ',', precision}).format() + 'K';
  } else {
    return currency(value, {separator: ',', precision}).format();
  }
}

export const getRegularCurrency = (value: string | number) : string => {
  value = currency(value).value;
  let precision = value % 1 === 0 ? 0 : 2;
  return currency(value, {separator: ',', precision}).format();
}