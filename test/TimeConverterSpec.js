describe('TimeConverter', () => {
    let timeConverter;
    beforeEach(() => {
        timeConverter = new TimeConverter();
    });

    it('Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock', () => {
        let timeIn24HoursClock = timeConverter.convert("12:00:00AM");
        expect(timeIn24HoursClock).to.equal("00:00:00");
    });

    it('Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock', () => {
        let timeIn24HoursClock = timeConverter.convert("12:00:00PM");
        expect(timeIn24HoursClock).to.equal("12:00:00");
    });

    it('07:05:45PM on a 12-hour clock, and 19:05:45 on a 24-hour clock', () => {
        let timeIn24HoursClock = timeConverter.convert("07:05:45PM");
        expect(timeIn24HoursClock).to.equal("19:05:45");
    });

    it('07:05:45AM on a 12-hour clock, and 07:05:45 on a 24-hour clock', () => {
        let timeIn24HoursClock = timeConverter.convert("07:05:45AM");
        expect(timeIn24HoursClock).to.equal("07:05:45");
    });
});