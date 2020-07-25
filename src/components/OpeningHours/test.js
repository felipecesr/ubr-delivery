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
  const testData = new Array(6)
  testData.push([
    {
      open: 600,
      close: 840,
    },
  ])

  global.Date.now = jest.fn(() => new Date("2020-07-25T14:24:00").getTime())

  render(<OpeningHours weekRanges={testData} />)

  expect(screen.getByText(/^fechado - abre às 10:00$/i)).toBeInTheDocument()
})
