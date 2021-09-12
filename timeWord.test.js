const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('00:00 works', () => {
    const res = timeWord('00:00');
    expect(res).toEqual("midnight");
  });

  test('00:12 works', () => {
    const res = timeWord('00:12');
    expect(res).toEqual("twelve twelve am");
  });

  test('01:00 works', () => {
    const res = timeWord('01:00');
    expect(res).toEqual("one o'clock am");
  });

  test('06:01 works', () => {
    const res = timeWord('06:01');
    expect(res).toEqual("six oh one am");
  });

  test('06:10 works', () => {
    const res = timeWord('06:10');
    expect(res).toEqual("six ten am");
  });

  test('06:18 works', () => {
    const res = timeWord('06:18');
    expect(res).toEqual("six eighteen am");
  });

  test('06:18 works', () => {
    const res = timeWord('06:18');
    expect(res).toEqual("six eighteen am");
  });

  test('06:30 works', () => {
    const res = timeWord('06:30');
    expect(res).toEqual("six thirty am");
  });

  test('10:34 works', () => {
    const res = timeWord('10:34');
    expect(res).toEqual("ten thirty four am");
  });

  test('12:00 works', () => {
    const res = timeWord('12:00');
    expect(res).toEqual("noon");
  });

  test('12:09 works', () => {
    const res = timeWord('12:09');
    expect(res).toEqual("twelve oh nine pm");
  });

  test('18:00 works', () => {
    const res = timeWord('18:00');
    expect(res).toEqual("six o'clock pm");
  });

  test('23:23 works', () => {
    const res = timeWord('23:23');
    expect(res).toEqual("eleven twenty three pm");
  });
});