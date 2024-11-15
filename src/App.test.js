import { render, screen } from '@testing-library/react';
import App from './App';

  test("test catse ",()=>{
    render( <App/>);
    const test1=screen.getByText(/First react app/i);
    const test2=screen.getByTitle("this is title image");
    expect(test1).toBeInTheDocument();
    expect(test2).toBeInTheDocument();
  })

  test("testing input fiels",()=>{
    render(<App/>);
    let checkInput=screen.getByRole("textbox");
    let checkplaceholder=screen.getByPlaceholderText(/enter image name/)
    expect(checkInput).toBeInTheDocument();
    expect(checkplaceholder).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("name","user_name");
    expect(checkInput).toHaveAttribute("id","user_id");
  })

  describe("UI test case group",()=>{
    test("test case 1",()=>{
      render(<App/>)
      let checkInput=screen.getByRole("textbox");
      expect(checkInput).toBeInTheDocument();
    })

    test("UI test case group 2",()=>{
      render(<App/>)
      let checktext=screen.getByText(/First react app/i);
      expect(checktext).toBeInTheDocument();
    })
  })

  describe.only("API test case group",()=>{
    test("test case 1",()=>{
      render(<App/>) 
      let checkInput=screen.getByRole("textbox");
      expect(checkInput).toBeInTheDocument();
    })

    test("UI test case group 2",()=>{
      render(<App/>)
      let checktext=screen.getByText(/First react app/i);
      expect(checktext).toBeInTheDocument();
    })

    
  })