import { useState } from "react"
import { useDispatch } from "react-redux";
import { newTask } from "./taskSlice";

const InputForm: React.FC = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputvalue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputvalue(e.target.value)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (inputValue) {
      dispatch(newTask(inputValue));
    }
    setInputvalue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={inputValue}
      />
      <input type="submit" value="追加" />
    </form>
  )
}

export default InputForm
