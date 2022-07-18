import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../store";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Leadership from "./Leadership";

describe("Navbar", () => {
    it("should render the component", () => {
      

        const component = render(
            <Provider stor
            e={store}>
                <BrowserRouter>
                    <Leadership/>
                </BrowserRouter>
            </Provider>
        );
      
        const nav_answered = component.getByTestId('answered')
        expect(nav_answered).toBeInTheDocument()
        const user = component.getByTestId('user')
        expect(user).toBeInTheDocument()
        const nav_created= component.getByTestId('created')
        expect(nav_created).toBeInTheDocument()
     
    });
})
