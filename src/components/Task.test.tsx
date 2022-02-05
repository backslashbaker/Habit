import React from "react";
import Task from "./Task"
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react"

describe("An incomplete task with a title", () => {
  beforeEach(() => {
    render(<Task id="asdf" title="test title" dueDate={new Date("2022-01-15")} completed={false} />);
  })
  it("renders the title", () => {
    expect(screen.getByText("test title")).toBeVisible();
  })
  it('shows as incomplete', () => {
    expect(screen.getByRole('checkbox').value).toEqual('on')
  })
  it('shows a due date', () => {
    expect(screen.getByText('15 Jan 2022')).toBeVisible()
  })
})

