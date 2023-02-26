module.exports = {
  format_amount: (amount) => {
    return parseInt(amount).toLocaleString();
  },

  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear() + 5
    }`;
  },
};
