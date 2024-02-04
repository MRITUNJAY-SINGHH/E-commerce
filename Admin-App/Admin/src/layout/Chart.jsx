import { Column } from '@ant-design/plots';

export const ChartColumn = () => {
   const data = [
      {
         type: 'January',
         sales: 38,
      },
      {
         type: 'February',
         sales: 52,
      },
      {
         type: 'March',
         sales: 61,
      },
      {
         type: 'April',
         sales: 145,
      },
      {
         type: 'May',
         sales: 48,
      },
      {
         type: 'June',
         sales: 38,
      },
      {
         type: 'July',
         sales: 38,
      },
      {
         type: 'August',
         sales: 38,
      },
      {
         type: 'September',
         sales: 38,
      },
      {
         type: 'October',
         sales: 38,
      },
      {
         type: 'November',
         sales: 38,
      },
      {
         type: 'December',
         sales: 38,
      },
   ];
   const config = {
      data,
      xField: 'type',
      yField: 'sales',
      color: '#fffd33',
      label: {
         // position: 'middle',

         style: {
            fill: '#FFFFFF',
            opacity: 1,
         },
      },
      xAxis: {
         label: {
            autoHide: true,
            autoRotate: false,
         },
      },
      meta: {
         type: {
            alias: 'Month',
         },
         sales: {
            alias: 'Income',
         },
      },
   };
   return <Column className='custom-chart-color' {...config} />;
};
