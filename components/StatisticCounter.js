import CountUp from 'react-countup';

export const StatisticCounter = ({ end, suffix = '', duration = 2.5 }) => {
  return (
    <CountUp
      end={end}
      duration={duration}
      separator=","
      suffix={suffix}
      enableScrollSpy
      scrollSpyOnce
    >
      {({ countUpRef }) => (
        <div className="text-4xl font-bold" ref={countUpRef} />
      )}
    </CountUp>
  );
}; 