import { fireEvent, render, MemoryRouter } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { handleInitialData } from '../actions/shared'
import Loginpage from "./LoginPage";

describe("Login", () => {

    it('should pass when correct credentisals provided', async () => {
        await store.dispatch(handleInitialData());

        const wrapper = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Loginpage />
                </BrowserRouter>
            </Provider>
        );

        const username = wrapper.getByTestId("username");
        const password = wrapper.getByTestId("password");
        const submitbtn = wrapper.getByTestId("submit");
        expect(username).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(submitbtn).toBeInTheDocument();
        expect(wrapper).toMatchSnapshot();
    })
})

describe("Login2", () => {

    it('fireEvent test', async () => {

        const component = render(<Provider store={store}>
            <BrowserRouter>
                <Loginpage />
            </BrowserRouter>
        </Provider>)

        var input1 = component.getByTestId("username")
        var input2 = component.getByTestId("password")
        fireEvent.change(input1, { target: { value: 'tylermcginnis' } })
        fireEvent.change(input2, { target: { value: 'abc321' } })
        var submitbtn = component.getByTestId("submit")
        expect(submitbtn).toBeInTheDocument()

    }
    )
})





    //         })})
