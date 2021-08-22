import React from 'react'

const InputComponentRef = ({ label, value, type, name, placeholder, inputkey, handlerOnChange
}, ref) => {
    return (
        <div className='input-group'>
            <input 
            value={value}
            type={type}
            name={name}
            className='form-control mb-4'
            placeholder={placeholder}
            ref={ref}
            onChange={() => handlerOnChange(ref.current.value, inputkey)}/>
        </div> )
        }
    
const InputComponent = React.forwardRef(InputComponentRef);
export default InputComponent;