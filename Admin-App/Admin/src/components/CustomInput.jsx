/* eslint-disable react/prop-types */
const CustomInput = ({ type, label, placeholder, i_id, i_class }) => {
   return (
      <div>
         <label
            htmlFor={i_id}
            className='text-sm font-medium leading-6 text-gray-900'
         >
            {label}
         </label>
         <div className='mt-1 mb-2'>
            <input
               id={i_id}
               name={label}
               type={type}
               autoComplete='off'
               placeholder={placeholder}
               required
               className={`w-full border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${i_class}`}
               style={{ outline: 'none', paddingLeft: '1rem' }}
            />
         </div>
      </div>
   );
};

export default CustomInput;
