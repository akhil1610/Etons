import React from 'react';

const InputComponentRef = (
    {label,value,type,name,placeholder,inputKey,handlerOnChange},ref)=>{
        return(
            <div className="input-group">{
                <div><label htmlFor={label}>{label}</label>
                <input 
                value={value}
                type={type}
                name={name}
                className='form-control mb-4'
                placeholder={placeholder}
                ref={ref}
                onChange={()=>handlerOnChange(ref.current.value,inputKey)}
                />
                </div>
                }    
            </div>
        )
    }


    const InputComponent = React.forwardRef(InputComponentRef);
    export default InputComponent;
