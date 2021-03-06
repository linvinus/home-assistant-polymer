import formatDateTime from '../../../js/common/util/format_date_time';

const assert = require('assert');

describe('formatDateTime', function() {
  const dateObj = new Date(
    2017, 10, 18,
    11, 12, 13, 1400,
  );

  it('Formats English date times', function() {
    assert.strictEqual(formatDateTime(dateObj, 'en'), 'November 18, 2017, 11:12 AM');
  });

  // Node only contains intl support for english formats. This test at least ensures
  // the fallback to a different locale
  it('Formats other date times', function() {
    assert.strictEqual(formatDateTime(dateObj, 'fr'), '2017 M11 18 11:12');
  });
});
