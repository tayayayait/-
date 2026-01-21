import { Discount } from '@/types/discount';

export function downloadDiscountIcs(discount: Discount) {
  const formatDate = (dateStr: string) => {
    return dateStr.replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const start = formatDate(new Date(discount.startDate).toISOString());
  const end = formatDate(new Date(discount.endDate).toISOString());
  
  const description = `${discount.description}\n\n혜택: ${discount.discountValue}\n매장: ${discount.storeName}\n주소: ${discount.location.address}`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Discount Platform//KR',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `DTSTAMP:${formatDate(new Date().toISOString())}`,
    `UID:${discount.id}@discount-platform`,
    `DTSTART;VALUE=DATE:${start.substring(0, 8)}`,
    `DTEND;VALUE=DATE:${end.substring(0, 8)}`,
    `SUMMARY:[할인] ${discount.title}`,
    `DESCRIPTION:${description.replace(/\n/g, '\\n')}`,
    `LOCATION:${discount.location.address}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${discount.title}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
