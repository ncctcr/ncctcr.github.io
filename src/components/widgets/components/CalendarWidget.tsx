import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
	background: #2e2e2e;
	backdrop-filter: blur(10px);
	border-radius: 17px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	padding: 12px;
	display: flex;
	flex-direction: column;
	overflow: hidden;
  color: #d4d4d4;
  aspect-ratio: 1 / 1;
  font-size: 0.6rem;
`;

const CalendarHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
  margin-left: 5px;
`;

const MonthNav = styled.div`
	display: flex;
	align-items: center;
`;

const MonthTitle = styled.h2`
	margin: 0;
	font-weight: 600;
  text-transform: uppercase;
  color: #fc4134;
`;

const DayLabels = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
  font-weight: bold;
`;

const DayLabel = styled.div`
	text-align: center;
`;

const DaysGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	grid-template-rows: repeat(6, 15%);
	flex-grow: 1;
`;

interface DayCellProps {
  isCurrentMonth?: boolean;
  isToday?: boolean;
  isSelected?: boolean;
  isWeekend?: boolean;
}

const DayCell = styled.div<DayCellProps>`
  text-align: center;
  cursor: default;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
	color: ${props =>
    props.isToday ? '#FFFFFF' : props.isWeekend ? '#999' : props.isCurrentMonth ? '#FFFFFF' : '#606060'};
  background-color: ${props => props.isToday ? '#fe453a' : 'transparent'};
  font-weight: bold;
  aspect-ratio: 1 / 1;
  line-height: 0;
`;

const weekdays: string[] = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

interface CalendarDay {
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
}

const shiftWeekStart = (date: Date): number => {
  // Смещает Sunday (0) в конец недели
  const day = date.getDay();
  return (day === 0 ? 6 : day - 1);
};

const getDaysInMonth = (date: Date): CalendarDay[] => {
  const year = date.getFullYear();
  const month = date.getMonth();

  // First day of the month
  const firstDay = new Date(year, month, 1);
  // Number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Get the day of the week of the first day (0-6, 0 = Sunday)
  const firstDayIndex = shiftWeekStart(firstDay);

  // Calculate days from previous month to display
  const prevMonthDays: CalendarDay[] = [];
  const prevMonthLastDay = new Date(year, month, 0).getDate();

  for (let i = firstDayIndex - 1; i >= 0; i--) {
    prevMonthDays.push({
      day: prevMonthLastDay - i,
      month: month - 1,
      year: month === 0 ? year - 1 : year,
      isCurrentMonth: false
    });
  }

  // Current month days
  const currentMonthDays: CalendarDay[] = [];
  for (let i = 1; i <= daysInMonth; i++) {
    currentMonthDays.push({
      day: i,
      month,
      year,
      isCurrentMonth: true
    });
  }

  // Calculate how many days from next month to display
  const totalDaysDisplayed = 42; // 6 rows of 7 days
  const nextMonthDays: CalendarDay[] = [];
  const remainingDays = totalDaysDisplayed - prevMonthDays.length - currentMonthDays.length;

  for (let i = 1; i <= remainingDays; i++) {
    nextMonthDays.push({
      day: i,
      month: month + 1,
      year: month === 11 ? year + 1 : year,
      isCurrentMonth: false
    });
  }

  return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
};

const CalendarWidget = () => {

  const isToday = (day: number, month: number, year: number): boolean => {
    const today = new Date();
    return day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();
  };

  const isWeekend = (dayIndex: number): boolean => {
    return dayIndex % 7 === 5 || dayIndex % 7 === 6;
  };

  const daysToDisplay = getDaysInMonth(new Date());

  return (
    <Wrapper>
      <CalendarHeader>
        <MonthNav>
          <MonthTitle>
            {new Date().toLocaleDateString('en-US', { month: 'long' })}
          </MonthTitle>
        </MonthNav>
      </CalendarHeader>

      <DayLabels>
        {weekdays.map((day, index) => (
          <DayLabel key={index}>{day}</DayLabel>
        ))}
      </DayLabels>

      <DaysGrid>
        {daysToDisplay.map((day, index) => {
          if (!day.isCurrentMonth) return <div key={index} style={{ height: 5, width: 5 }} />;
          return (
            <DayCell
              key={index}
              isCurrentMonth={day.isCurrentMonth}
              isToday={isToday(day.day, day.month, day.year)}
              isWeekend={isWeekend(index)}
            >
              {day.day}
            </DayCell>
          );
        })}
      </DaysGrid>
    </Wrapper>
  );
};

export default CalendarWidget;