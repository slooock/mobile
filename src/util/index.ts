export default function transformDate(date:Date){
  // var date:Date = new Date();
  const year:string = date.getFullYear().toString();
  var month:string = date.getMonth().toString();
  var day:string = date.getDate().toString();
  var dateTransform:string = '';
  if(month.length<2){
    month = '0'.concat(month);
  }
  if(day.length<2){
    day = '0'.concat(day);
  }

  dateTransform = dateTransform.concat(year)
    .concat('-').concat(month).concat('-').concat(day).concat('T00:00:00Z');
  return dateTransform
}