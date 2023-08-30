import React from "react"; 
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Contact from "./Contact";

test("renders component correctly", () => {
    const view = render(<Contact/>)
    expect(view).toMatchSnapshot();
})

test("renders text correctly", () => {
    const { getByText }= render(<Contact/>)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const text = getByText("Get notified");
    expect(text).toBeInTheDocument();
})