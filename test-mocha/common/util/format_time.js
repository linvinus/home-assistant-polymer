import formatTime from '../../../js/common/util/format_time';

const assert = require('assert');

describe('formatTime', function() {
  const dateObj = new Date(
    2017, 10, 18,
    11, 12, 13, 1400,
  );

  it('Formats English times', function() {
    assert.strictEqual(formatTime(dateObj, 'en'), '11:12 AM');
  });

  // Node only contains intl support for english formats. This test at least ensures
  // the fallback to a different locale
  it('Formats other times', function() {
    assert.strictEqual(formatTime(dateObj, 'fr'), '11:12');
  });
});
