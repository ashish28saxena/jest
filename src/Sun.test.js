import { render , screen } from "@testing-library/react";
import Sum from "./Sum";

test(" test sum app",()=>{
    let a=10;
    let b=20;
    let output=30;
    expect( Sum(a,b)).toBe(output)
    //render(<Sum />)
})