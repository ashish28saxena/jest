
import User from "./component/User";
import { render,screen ,fireEvent } from "@testing-library/react";

test("tesing user case 1",()=>{
     
    render(<User/>);
    let input=screen.getByRole("textbox");
    fireEvent.change(input,{target:{value:'a'}})
   // expect(input).toHaveAttribute("name","username");
    expect(input.value).toBe("a")

})

test("testing on click event",()=>{
    render(<User/>)
    let btn=screen.getByRole("button");
    fireEvent.click(btn);
    expect(screen.getByText("hello ashish")).toBeInTheDocument();
})