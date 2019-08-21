export default {
  /**
   * 返回至少两位数字
   * @param {Number|1} n 传入数字.
   * @return {String|01} 返回数字.
   */
  formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
  },
  /**
   * 创建元素
   * @param {String|div} element 传入标签.
   * @param {String} className 传入class.
   * @return {html} 返回元素.
   */
  createElement(element, className) {
    const el = document.createElement(element);
    className && (el.className = className);

    return el;
  },
  /**
   * 格式化时间
   * @method dateFormat
   * @param date 需格式化的时间.
   * @param fmt 指定格式化的格式.
   * @return 返回格式化后的时间.
   */
  dateFormat(date, fmt) {
    /**
     * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
     * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
     * 例子：
     * dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss.S') ==> 2018-07-02 08:09:04.423
     * dateFormat(new Date(), 'yyyy-M-d h:m:s.S')      ==> 2006-7-2 8:9:4.18
     */
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      );
    }
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        );
      }
    }
    return fmt;
  }
};