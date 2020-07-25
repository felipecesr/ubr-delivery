const { openingHours } = require("../opening-hours")

describe("openingHours", () => {
  it("should get weekdays and build object", () => {
    const data = openingHours("08:00-18:00")
    expect(data).toEqual([
      [{ open: 480, close: 1080 }],
      [{ open: 480, close: 1080 }],
      [{ open: 480, close: 1080 }],
      [{ open: 480, close: 1080 }],
      [{ open: 480, close: 1080 }],
      [],
      [],
    ])
  })

  it("should get another weekdays and build object", () => {
    const data = openingHours("07:00-17:00")
    expect(data).toEqual([
      [{ open: 420, close: 1020 }],
      [{ open: 420, close: 1020 }],
      [{ open: 420, close: 1020 }],
      [{ open: 420, close: 1020 }],
      [{ open: 420, close: 1020 }],
      [],
      [],
    ])
  })

  it("should get weekdays with lunch time and build object", () => {
    const data = openingHours("08:00-12:00,13:00-18:00")
    expect(data).toEqual([
      [
        { open: 480, close: 720 },
        { open: 780, close: 1080 },
      ],
      [
        { open: 480, close: 720 },
        { open: 780, close: 1080 },
      ],
      [
        { open: 480, close: 720 },
        { open: 780, close: 1080 },
      ],
      [
        { open: 480, close: 720 },
        { open: 780, close: 1080 },
      ],
      [
        { open: 480, close: 720 },
        { open: 780, close: 1080 },
      ],
      [],
      [],
    ])
  })

  it("should get weekdays and saturday", () => {
    const data = openingHours(
      "08:00-12:00,13:00-18:00",
      "09:00-12:00,14:00-17:00"
    )
    expect(data).toEqual([
      [
        { open: 480, close: 720 },
        { open: 780, close: 1080 },
      ],
      [
        { open: 480, close: 720 },
        { open: 780, close: 1080 },
      ],
      [
        { open: 480, close: 720 },
        { open: 780, close: 1080 },
      ],
      [
        { open: 480, close: 720 },
        { open: 780, close: 1080 },
      ],
      [
        { open: 480, close: 720 },
        { open: 780, close: 1080 },
      ],
      [
        { open: 540, close: 720 },
        { open: 840, close: 1020 },
      ],
      [],
    ])
  })

  it("should get every day od the week", () => {
    const data = openingHours(
      "08:00-12:00,13:00-18:00",
      "09:00-12:00,14:00-17:00",
      "09:30-12:00"
    )
    expect(data).toEqual([
      [
        { open: 480, close: 720 },
        { open: 780, close: 1080 },
      ],
      [
        { open: 480, close: 720 },
        { open: 780, close: 1080 },
      ],
      [
        { open: 480, close: 720 },
        { open: 780, close: 1080 },
      ],
      [
        { open: 480, close: 720 },
        { open: 780, close: 1080 },
      ],
      [
        { open: 480, close: 720 },
        { open: 780, close: 1080 },
      ],
      [
        { open: 540, close: 720 },
        { open: 840, close: 1020 },
      ],
      [{ open: 570, close: 720 }],
    ])
  })
})
