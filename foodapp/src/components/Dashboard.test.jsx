import React from "react"; 
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Dashboard from "./Dashboard";
import { Provider } from "react-redux";
import store from "../redux/store";

test("renders component correctly", () => {
    const view = render(
    <Provider store={store}>
        <Dashboard/>
    </Provider>
    )
    expect(view).toMatchSnapshot();
    const testMessage = 'Good morning';
    expect(screen.getByText(testMessage)).toBeInTheDocument();
})

test("renders text correctly", () => {
    render(
    <Provider store={store}>
        <Dashboard/>
    </Provider>
    )

})
