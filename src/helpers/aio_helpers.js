import moment from "moment";

const Helper = {
  /**
   *
   * Return Date Now
   *
   */
  generateDateNow() {
    return moment().format("YYYY-MM-DD");
  },

  /**
   * Return minutes difference
   * @param {string} time_start
   * @param {string} time_end
   */
  countDifferenceTime(time_start, time_end) {
    const startTime = moment(time_start, "HH:mm");
    const endTime = moment(time_end, "HH:mm");
    const duration = moment.duration(endTime.diff(startTime));
    const minutes = parseInt(duration.asMinutes());

    return minutes;
  },
};

export default Helper;
