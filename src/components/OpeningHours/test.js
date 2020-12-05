import React from "react"
import { render, screen } from "@testing-library/react"
import OpeningHours from "./"

const realDate = Date.now

afterAll(() => {
  global.Date.now = realDate
})

test("renders open text and close time", () => {
  const testData = [
    [
      {
        open: 600,
        close: 840,
      },
    ],
  ]

  global.Date.now = jest.fn(() => new Date("1995-12-17T10:24:00").getTime())

  render(<OpeningHours weekRanges={testData} />)

  expect(screen.getByText(/^aberto - fecha às 14:00$/i)).toBeInTheDocument()
})

test("renders open text, close time and reopen time", () => {
  const testData = [
    [
      {
        open: 600,
        close: 840,
      },
      {
        open: 1020,
        close: 1380,
      },
    ],
  ]

  global.Date.now = jest.fn(() => new Date("1995-12-17T11:24:00").getTime())

  render(<OpeningHours weekRanges={testData} />)

  expect(
    screen.getByText(/^aberto - fecha às 14:00 - reabre às 17:00$/i)
  ).toBeInTheDocument()
})

test("renders close text and open time", () => {
  const testData = [
    [
      {
        open: 420,
        close: 1320,
      },
    ],
  ]

  global.Date.now = jest.fn(() => new Date("1995-12-17T23:24:00").getTime())

  render(<OpeningHours weekRanges={testData} />)

  expect(screen.getByText(/^fechado - abre às 07:00$/i)).toBeInTheDocument()
})

test("renders close text and reopen time", () => {
  const testData = [
    [
      {
        open: 600,
        close: 840,
      },
      {
        open: 1020,
        close: 1380,
      },
    ],
  ]

  global.Date.now = jest.fn(() => new Date("1995-12-17T14:24:00").getTime())

  render(<OpeningHours weekRanges={testData} />)

  expect(screen.getByText(/^fechado - abre às 17:00$/i)).toBeInTheDocument()
})

test("renders hours to correct day", () => {
  const testData = new Array(7)
  testData[5] = [
    {
      open: 420,
      close: 840,
    },
  ]
  testData[6] = [
    {
      open: 600,
      close: 840,
    },
  ]

  global.Date.now = jest.fn(() =>
    new Date("2020-08-01T01:25:10.369Z").getTime()
  )

  render(<OpeningHours weekRanges={testData} />)

  expect(screen.getByText(/^fechado - abre às 07:00$/i)).toBeInTheDocument()
})

test("renders reopen text and close time", () => {
  const testData = new Array(6)
  testData.push([
    {
      open: 420,
      close: 780,
    },
    {
      open: 870,
      close: 1200,
    },
  ])

  global.Date.now = jest.fn(() => new Date("2020-07-25T17:48:00").getTime())

  render(<OpeningHours weekRanges={testData} />)

  expect(screen.getByText(/^aberto - fecha às 20:00$/i)).toBeInTheDocument()
})

test("exibe fechado e abre domingo", () => {
  const testData = new Array(7).map(item => [])
  testData[0] = [
    {
      open: 450,
      close: 780,
    },
    {
      open: 870,
      close: 1200,
    },
  ]
  testData[6] = [
    {
      open: 420,
      close: 1320,
    },
  ]

  global.Date.now = jest.fn(() =>
    new Date("2020-08-02T01:25:10.369Z").getTime()
  )

  render(<OpeningHours weekRanges={testData} />)

  expect(screen.getByText(/^fechado - abre às 07:30$/i)).toBeInTheDocument()
})

test("exibe fechado e abre só na segunda", () => {
  const testData = new Array(7).map(item => [])
  testData[0] = []
  testData[1] = [
    {
      open: 450,
      close: 780,
    },
    {
      open: 870,
      close: 1200,
    },
  ]
  testData[6] = [
    {
      open: 420,
      close: 1320,
    },
  ]

  global.Date.now = jest.fn(() =>
    new Date("2020-08-02T01:25:10.369Z").getTime()
  )

  render(<OpeningHours weekRanges={testData} />)

  expect(
    screen.getByText(/^fechado - abre segunda às 07:30$/i)
  ).toBeInTheDocument()
})

test("abre as 12 e fecha as 18", () => {
  const testData = new Array(7).map(item => [])
  testData[6] = [
    {
      open: 720,
      close: 1080,
    },
  ]

  global.Date.now = jest.fn(() =>
    new Date("2020-08-01T08:25:52.650Z").getTime()
  )

  render(<OpeningHours weekRanges={testData} />)

  expect(screen.getByText(/^fechado - abre às 12:00$/i)).toBeInTheDocument()
})

test("renders fallback when data is empty", () => {
  const testData = [[]]

  global.Date.now = jest.fn(() => new Date("1995-12-17T14:24:00").getTime())

  render(<OpeningHours weekRanges={testData} />)

  expect(
    screen.getByText(/^não há informações de horários$/i)
  ).toBeInTheDocument()
})