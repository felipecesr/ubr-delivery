const { openingHours } = require("../opening-hours")

describe("openingHours", () => {
  it("should get weekdays and build object", () => {
    const data = openingHours("08:00-18:00")
    expect(data).toEqual({
      monday: [8, 18],
      tuesday: [8, 18],
      wednesday: [8, 18],
      thursday: [8, 18],
      friday: [8, 18],
      saturday: [],
      sunday: [],
    })
  })

  it("should get another weekdays and build object", () => {
    const data = openingHours("07:00-17:00")
    expect(data).toEqual({
      monday: [7, 17],
      tuesday: [7, 17],
      wednesday: [7, 17],
      thursday: [7, 17],
      friday: [7, 17],
      saturday: [],
      sunday: [],
    })
  })

  it("should get weekdays with lunch time and build object", () => {
    const data = openingHours("08:00-12:00,13:00-18:00")
    expect(data).toEqual({
      monday: [8, 12, 13, 18],
      tuesday: [8, 12, 13, 18],
      wednesday: [8, 12, 13, 18],
      thursday: [8, 12, 13, 18],
      friday: [8, 12, 13, 18],
      saturday: [],
      sunday: [],
    })
  })

  it("should get weekdays and saturday", () => {
    const data = openingHours(
      "08:00-12:00,13:00-18:00",
      "09:00-12:00,14:00-17:00"
    )
    expect(data).toEqual({
      monday: [8, 12, 13, 18],
      tuesday: [8, 12, 13, 18],
      wednesday: [8, 12, 13, 18],
      thursday: [8, 12, 13, 18],
      friday: [8, 12, 13, 18],
      saturday: [9, 12, 14, 17],
      sunday: [],
    })
  })

  it("should get every day od the week", () => {
    const data = openingHours(
      "08:00-12:00,13:00-18:00",
      "09:00-12:00,14:00-17:00",
      "09:30-12:00"
    )
    expect(data).toEqual({
      monday: [8, 12, 13, 18],
      tuesday: [8, 12, 13, 18],
      wednesday: [8, 12, 13, 18],
      thursday: [8, 12, 13, 18],
      friday: [8, 12, 13, 18],
      saturday: [9, 12, 14, 17],
      sunday: [9.3, 12],
    })
  })
})
