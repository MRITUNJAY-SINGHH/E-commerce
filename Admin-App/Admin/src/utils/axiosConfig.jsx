export const getConfig = () => {
   const token = localStorage.getItem('token')
      ? JSON.parse(localStorage.getItem('token'))
      : null;

   return {
      headers: {
         Authorization: `Bearer ${token}`,
         'Content-Type': 'application/json',
      },
   };
};
