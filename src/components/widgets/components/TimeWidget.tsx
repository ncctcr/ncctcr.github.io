import React, { useEffect, useState } from 'react';
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
	justify-content: center;
	align-items: center;
  aspect-ratio: 1 / 1;
`;

const Clock = styled.div`
	font-size: 42px;
	font-weight: 300;
	color: #d4d4d4;
`;

const DateTime = styled.div`
	font-size: 14px;
	color: #9c9595;
  text-align: center;
`;

const TimeWidget = () => {
  const [time, setTime] = useState<string>('');
  const [dateStr, setDateStr] = useState<string>('');

  // Update clock every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
      const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };

      setTime(now.toLocaleTimeString([], timeOptions));
      setDateStr(now.toLocaleDateString([], dateOptions));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <Clock>{time}</Clock>
      <DateTime>{dateStr}</DateTime>
    </Wrapper>
  );
};

export default TimeWidget;