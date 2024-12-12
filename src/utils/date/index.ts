// Mascara
import { FormatDate } from "../mask/date";

export default function GetDate() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  return { today: FormatDate(today), day, month, year };
}
