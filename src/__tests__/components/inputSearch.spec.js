import React from 'react'
import {fireEvent, render,screen} from "@testing-library/react"

import InputSearch from '../../components/InputSearch'

describe("InputSearch",()=>{
    test("should be able to render an input",()=>{
        render(<InputSearch placeholder='search' />)
        expect(screen.getAllByPlaceholderText("search")).toBeTruthy()
    })
    test("should be able insert values on input",()=>{
        render(<InputSearch value={""} onChange={()=>{}} placeholder="Search Pokémon for name" />)
        const search = screen.getByPlaceholderText("Search Pokémon for name")
        fireEvent.change(search,{target:{value:"pikachu"}})
        expect(search).toHaveValue("pikachu")
    })
})