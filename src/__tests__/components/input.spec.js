import React from "react";
import * as yup from "yup";
import {MemoryRouter} from "react-router-dom"

import {fireEvent, render,screen, } from "@testing-library/react"
import Input from "../../components/input";
import PageAction from "../../components/PageAction";


describe("Input",()=>{
    test("Should be able render",()=>{
        render(<Input register={()=>{}} registerValue=""  placeholder="user name"/>)
        expect(screen.getAllByPlaceholderText("user name")).toBeTruthy()
    })

    test("Should be able to render an error",async()=>{
        const schema = yup.object().shape({
            name: yup.string().required("Nome Obrigatório"),
            password: yup.string().required("Password Obrigatório"),
          });
        render(
            <MemoryRouter>
                <PageAction
                link="Não possui conta? cadastre-se!"
                toLink="/register"
                warning={false}
                valueButton="Login"
                title="Login"
                schema={schema}
                callbackSubmit={()=>{}}
                />
            </MemoryRouter>
        )
            fireEvent.click(screen.getAllByTestId("submit")[0])
            expect(await screen.findByText("Nome Obrigatório")).toBeInTheDocument()
           expect(screen.getByText("Password Obrigatório")).toBeInTheDocument()
    })
})