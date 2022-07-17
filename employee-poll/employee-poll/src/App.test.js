import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter} from "react-router-dom";

describe("App", () => {
    it(" show Login page when page render", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        );
        const heading = component.getByTestId("siginPage");
        expect(heading).toBeInTheDocument();
    });

})
