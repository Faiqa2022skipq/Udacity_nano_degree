import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../store";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import {setAuthedUser} from "../actions/authedUser";

describe("Navbar", () => {
    it("should render the component", () => {
        store.dispatch(setAuthedUser({id: "tylermcginnis", password: ""}));

        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar/>
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
        const nav_leadership = component.getByTestId('leadership')
        expect(nav_leadership).toBeInTheDocument()
        const nav_home = component.getByTestId('home')
        expect(nav_home).toBeInTheDocument()
        const nav_new = component.getByTestId('new')
        expect(nav_new).toBeInTheDocument()
        const nav_logout = component.getByTestId('logout')
        expect(nav_logout).toBeInTheDocument()
    });
})
