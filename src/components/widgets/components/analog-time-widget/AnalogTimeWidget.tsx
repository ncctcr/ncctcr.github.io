import styled from 'styled-components';
import useClockHands from './use-clock-hands';
import { CLOCK_MARKERS } from './constants';
import { useMemo } from 'react';

const Wrapper = styled.div`
	width: 100%;
  aspect-ratio: 1 / 1;
	background: #1a1a1a;
	border-radius: 17px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
`;

const Clock = styled.div`
	width: 100%;
  aspect-ratio: 1 / 1;
	background: #ffffff;
	border-radius: 50%;
	position: relative;
	border: 2px solid #333;
  margin: 5%;
	container-type: inline-size;
`

const Marker = styled.div<{type: string}>`
	position: absolute;
	left: 50%;
	top: 4%;
	width: 0.9%;
	height: 4%;
	margin-left: -0.6%;
	border-radius: 5px;
	transform-origin: 50% calc(46% / 0.04); 
  background: ${({type}) => type === 'main' ? '#1f1f21' : '#b7b7b7'};
  span {
    margin-top: 3cqw;
    margin-left: -5px;
    position: absolute;
    font-weight: 600;
		font-size: 10cqw; /* 10% width Clock */
  }
`

const Brand = styled.div`
	position: absolute;
	top: 30%;
	left: 50%;
	transform: translateX(-50%);
	color: #888;
	font-size: 5cqw;
	font-weight: bold;
	letter-spacing: 1px;
`

const Arrow = styled.div<{ variant: string }>`
	position: absolute;
	left: 50%;
	top: 50%;
	transform-origin: 50% 100%;
	border-radius: 3px;
	${({ variant }) => variant === 'hour-hand' && `
		width: 1.5cqw;
		height: 25cqw;
		background: #1c1c1e;
		margin-left: -0.75cqw;
		margin-top: -25cqw;
		z-index: 3;
	`}
	${({ variant }) => variant === 'minute-hand' && `
		width: 1cqw;
		height: 45cqw;
		background: #1c1c1e;
		margin-left: -0.5cqw;
		margin-top: -45cqw;
		z-index: 4;
	`}
	${({ variant }) => variant === 'second-hand' && `
		width: 0.7cqw;
		height: 46cqw;
		background: #ff6b00;
		margin-left: -0.25cqw;
		margin-top: -46cqw;
		z-index: 5;
	`}
`

const CenterDot = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 4cqw;
	height: 4cqw;
	background: #ff6b00;
	border-radius: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
`

const ClockMarkers = () => {
  const markers = useMemo(() => {
    return CLOCK_MARKERS.map((item, index) => {
      const rotation = (360 / CLOCK_MARKERS.length) * index;
      return (
        <Marker
          key={index}
          style={{ transform: `rotate(${rotation}deg)` }}
          type={item.type}
        >
          {item.number && (
            <span style={{ transform: `rotate(-${rotation}deg)` }}>
              {item.number}
            </span>
          )}
        </Marker>
      );
    });
  }, []);

  return <>{markers}</>;
};

const ClockHands: React.FC = () => {
  const { hourRef, minuteRef, secondRef } = useClockHands();
  return (
    <>
      <Arrow variant="hour-hand" ref={hourRef} />
      <Arrow variant="minute-hand" ref={minuteRef} />
      <Arrow variant="second-hand" ref={secondRef} />
    </>
  );
};

const AnalogTimeWidget = () => {
  return (
    <Wrapper>
      <Clock>
        <ClockMarkers />
        <ClockHands />
        <Brand>CUP</Brand>
        <CenterDot/>
      </Clock>
    </Wrapper>
  );
};

export default AnalogTimeWidget;