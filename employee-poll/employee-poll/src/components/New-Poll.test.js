import {  render, screen } from "@testing-library/react";
import NewPoll from "./New-Poll";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";

describe("NewPoll Testing", () => {
  it("should have one button and 2 input field", () => {
    const component = render(
        <Provider store={store}>
            <BrowserRouter>
                <NewPoll/>
            </BrowserRouter>
        </Provider>
    );
    expect(screen.getAllByRole("textbox")).toHaveLength(2);
    expect(screen.getAllByRole("button")).toHaveLength(1);
  });});



    