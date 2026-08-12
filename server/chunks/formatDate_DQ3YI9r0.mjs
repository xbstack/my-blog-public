import { format } from 'date-fns-tz';

const formatDate = (date, format$1 = "yyyy-MM-dd") => {
  if (!date) return "";
  try {
    const d = new Date(date);
    if (isNaN(d.getTime())) return "";
    return format(d, format$1);
  } catch (e) {
    return "";
  }
};

export { formatDate as f };
