import React from "react";
import Task from "./Task"
import '@testing-library/jest-dom';
import {fireEvent, render, screen, waitFor} from "@testing-library/react"

describe("An incomplete task with a title", () => {
  beforeEach(() => {
    render(<Task id="asdf" title="test title" dueDate={new Date("2022-01-15")} completed={false} />);
  })
  it("renders the title", () => {
    expect(screen.getByText("test title")).toBeVisible();
  })
  it('shows as incomplete', () => {
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })
  it('shows a due date', () => {
    expect(screen.getByText('15 Jan 2022')).toBeVisible()
  })
})

describe('Completing a task', () => {
  describe('When the task has no due date', () => {
    beforeEach(async () => {
      render(
        <Task
          id="3049qbhvt0q"
          title="test title"
          completed={false}
        />
      );

      await waitFor(() => {
        fireEvent.click(screen.getByRole('checkbox'))
      })
    });

    it('shows as complete', () => {
      expect(screen.getByRole('checkbox')).toBeChecked()
    })
  });
});
