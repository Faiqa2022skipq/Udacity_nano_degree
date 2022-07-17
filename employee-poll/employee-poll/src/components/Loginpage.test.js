import {fireEvent, render, MemoryRouter} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../store";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {handleInitialData} from '../actions/shared'
import Loginpage from "./LoginPage";

describe("Login", () => {

it('should pass when correct credentisals provided', async () => {
    await store.dispatch(handleInitialData());

    const wrapper = render(
        <Provider store={store}>
            <BrowserRouter>
                <Loginpage/>
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
    })})

    // describe("Login2", () => {

    //     it('should pass when Incorrect credentisals provided', async () => {
    //         await store.dispatch(handleInitialData());
        
    //         const wrapper = render(
    //             <Provider store={store}>
    //                 <BrowserRouter>
    //                     <Loginpage/>
    //                 </BrowserRouter>
    //             </Provider>
    //         );
        
    //         const usernameInputElement = wrapper.getByTestId("username");
    //         const passwordInputElement = wrapper.getByTestId("password");
    //         const submitButtonElement = wrapper.getByTestId("submit");
    //         expect(usernameInputElement).toBeInTheDocument();
    //         expect(passwordInputElement).toBeInTheDocument();
    //         expect(submitButtonElement).toBeInTheDocument();
    
           
       
    //         })})
            