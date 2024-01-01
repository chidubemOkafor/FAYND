export const changeFormat = (date,type) => {
    const originalDate = new Date(date);
    const day = originalDate.getDate();
    const month = originalDate.getMonth() + 1;
    const year = originalDate.getFullYear();
    const formattedDate = type === "dash" ? `${day}-${month}-${year % 100}`:`${day}/${month}/${year % 100}`;
    return formattedDate;
  };