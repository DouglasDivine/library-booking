import React from "react";
import { string, object, number } from 'yup';
import { Labelled, Button } from '@wigxel/react-components';
import Alert from './Alert'

const { Input } = Labelled;

let schema = object().shape({
  booktitle: string().required().min(5),
  quantity: number().positive().required(),
  author: string().required(),
  category: string().required()
});

const default_state = {
    booktitle: "",
    quantity: 0,
    author: "",
    category: "",
    errors: [],
};

export default function AddBook (props) {
    const [message, setMessage] = React.useState({ text: "", type: "" });
    const [state, setState] = React.useState(default_state);

    const reset = () => {
      setState(default_state)
      setMessage({text:'',type:''})
    };

    const curUpdateField = (fieldName) => (evt) => {
        setState({ 
            ...state, 
            [fieldName]: evt.target.value
        })
    }

    // const a = Symbol("id");
    // const b = Symbol("id");
    // Symbol("id").toString()
    // console.log(a === a, b == b, a === b); // false
    
    const handleSubmit = evt => {
      evt.preventDefault();
      // schema.isValid(state).then((result) => {});
      schema.validate(state).then((result) => {
        setMessage({ text:'Book has been added', type:'success' })
        setTimeout(() => {
          props.onSubmitBook({ ...state ,id: Symbol('book_id') }); 
          reset()
        }, 5000) 
      }).catch((err) => {
        // add the `err.errors` here into the state[errors]
        setState({...state, errors: err.errors })
        setMessage({text:'There was an error', type:'danger'})
        // console.log(err.name, err.errors);
      })
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
        <h1>Add A Book</h1>
        {message.text && <Alert message={message.text} type={message.type} />}
        {state.errors.map((error,index)=> {
          return <li key ={index}>{error}</li>
        })}
         <Input
          type="text"
          label="Book Title"
          name="booktitle"
          fullwidth
          placeholder="Harry Potter.."
          value={state.booktitle}
          onChange={curUpdateField("booktitle")}
        />
        <br />
      
        <Input
          type="number"
          label="Quantity"
          name="quantity"
          placeholder="15"
          value={state.quantity}
          fullwidth
          onChange={curUpdateField("quantity")}
        />
        <br />
      
        <Input
          type="text"
          label="Author"
          fullwidth
          name="author"
          value={state.author}
          placeholder="J.K Rowling.."
          onChange={curUpdateField("author")}
        />
        <br />
        <Labelled.Select 
          label="Category"
          name="category"
          fullwidth
          onChange={curUpdateField("category")}>
          <option>Fantasy</option>
          <option>Sci-Fiction</option>
          <option>Adventure</option>
        </Labelled.Select>
        <br />
        <div style={{textAlign: 'center'}}>
          <Button primary>ADD BOOK</Button>
          <Button danger outline type="button" onClick={(evt) => {
            evt.preventDefault();
            reset();
          }}>RESET</Button>
        </div>
      </form>
    )
}
