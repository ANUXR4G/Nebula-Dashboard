import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function DateCalendarFormProps() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='min-h-full'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateCalendar', 'DateCalendar']}>
          <div style={{ width: '400px', height: '460px' }}>
            <DateCalendar defaultValue={dayjs()} readOnly />
          </div>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}