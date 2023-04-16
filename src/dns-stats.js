/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains.reduce((acc, adress) => {
    let str = '';
    adress.split('.').reverse().forEach(elem => {
      str += `.${elem}`;
      if (str in acc) {
        acc[str] = acc[str] + 1;
      } else {
        acc[str] = 1;
      }
    });

    return acc;
  }, {})
}

module.exports = {
  getDNSStats
};
