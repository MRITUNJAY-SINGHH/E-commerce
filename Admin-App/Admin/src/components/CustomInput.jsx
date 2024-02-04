/* eslint-disable react/prop-types */
const CustomInput = ({
   type,
   label,
   placeholder,
   i_id,
   i_class,
   name,
   value,
   onBlur,
   onChange,
   error,
}) => {
   return (
      <div>
         <label
            htmlFor={i_id}
            className='text-sm font-medium leading-6 text-gray-900'
         >
            {label}
         </label>
         <div className='relative'>
            <input
               id={i_id}
               name={name}
               type={type}
               value={value}
               autoComplete='off'
               placeholder={placeholder}
               className={`w-full border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${i_class}`}
               style={{ outline: 'none', paddingLeft: '1rem' }}
               onChange={onChange}
               onBlur={onBlur}
            />
            {error && (
               <div className='absolute top-1/2 right-3 transform -translate-y-1/2'>
                  <div style={{ color: 'red' }}>{error}</div>
               </div>
            )}
         </div>
      </div>
   );
};

export default CustomInput;
