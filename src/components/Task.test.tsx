import React from "react";
import Task from "./Task"
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react"

describe("placeholder", ()=>{
    it("placeholder2", ()=>{
        render(<Task></Task>)
        expect(screen.getByText("TEST")).toBeVisible()
    })
})
