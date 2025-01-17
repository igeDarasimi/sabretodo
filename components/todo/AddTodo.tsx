import Input from '../input/Input'
import Button from '../button/Button'
import Form from '../form/Form'
import * as actions from '@/actions'
const AddTodo = () => {
  return (
    <div>
        <Form action={actions.createTodo}>
            <div className='flex gap-4 items-center'>
            <Input name='input' type='text' placeholder='Add todo here'/>
            <Button type='submit' text="Add" bgColor='bg-blue-600'/>
            </div>
        </Form>
    </div>
  )
}

export default AddTodo