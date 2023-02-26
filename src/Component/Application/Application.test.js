import { render, screen } from "@testing-library/react"
import Application from "./Application";

describe("Application", () => {
    test("renders Correctly", () => {
        render(<Application />);
        const nameElement = screen.getByRole("textbox", {
            name:"Name",
        });
        expect(nameElement).toBeInTheDocument(); 

        const bioElement = screen.getByRole('textbox', {
            name:'Bio'
        })
        expect(bioElement).toBeInTheDocument()

        const radioElement = screen.getByRole("checkbox")
        expect(radioElement).toBeInTheDocument();

        const checkBoxElement = screen.getByRole("combobox")
        expect(checkBoxElement).toBeInTheDocument()

        const submitButtonElement = screen.getByRole('button')
        expect(submitButtonElement).toBeInTheDocument()
    })
})