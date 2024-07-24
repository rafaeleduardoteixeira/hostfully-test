import moment from 'moment';
import { Container } from './InputDateRange.styles';

//Calendar
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface InputDateRangeProps {
  bookedDates?: {
    start: Date | null;
    end: Date | null;
  }[];
  dateStart: Date | undefined;
  dateEnd: Date | undefined;
  error?: string;
  onChange: (value: any) => void;
}

export const InputDateRange = ({ bookedDates, dateStart, dateEnd, error, onChange }: InputDateRangeProps) => {
  const excludeDateIntervals = bookedDates?.map((bookedDate) => {
    return {
      start: moment(bookedDate.start, 'America/Los_Angeles').subtract(1, 'days').toDate(),
      end: moment(bookedDate.end, 'America/Los_Angeles').toDate(),
    };
  }) as { start: Date; end: Date }[];

  const handleChange = (value: any) => {
    if (value) {
      onChange(value);
      return;
    }
    onChange(null);
  };

  return (
    <Container error={error}>
      <DatePicker
        showIcon
        icon={<img src="/icons/calendar.svg" alt="calendar" />}
        className="date-picker"
        placeholderText="Select a date to book"
        dateFormat={'MMMM d, yyyy'}
        selected={dateStart}
        selectsRange
        startDate={dateStart}
        endDate={dateEnd}
        onChange={handleChange}
        minDate={new Date()}
        excludeDateIntervals={excludeDateIntervals}
        shouldCloseOnSelect={true}
      />
    </Container>
  );
};
