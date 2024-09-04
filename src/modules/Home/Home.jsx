import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { ClocksContent, Content, CustomButton, CustomTimeContent, FiboContent, FiboNumbers, RealTimeContent } from "./Home.styles";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTime, selectTimeState } from '../../slices/timeSlice';

function Home() {
  const timeHistory = useSelector(selectTimeState)
  const dispatch = useDispatch();
  const [time, setTime] = useState({
    hour: null,
    minutes: null,
    seconds: null
  });
  const [timeToShow, setTimetoShow] = useState({
    hour: null,
    minutes: null,
    seconds: null
  });
  const [dateState, setDateState] = useState(new Date());
  const [fibo, setFibo] = useState([]);

  const handleTime = (newValue, selectionState) => {
    if (selectionState.validationError !== "invalidDate") {
      setTime({
        hour: newValue.$H,
        minutes: newValue.$m,
        seconds: newValue.$s
      })
    }
  }

  const getFibo = (minutes, seconds) => {
    const seed = minutes.toString().split("").sort();
    if (seed.length === 1 && seed[0] > 1) {
      seed.unshift("0")
    } else if(seed.length === 1 && seed[0] < 1) return ["0"]
    let number1 = Number(seed[0]);
    let number2 = Number(seed[1]);
    let result = [];
    let preValue;
    for (let i = 0; i < seconds + 2; i++) {
      result[i] = number1;
      preValue = number1 + number2;
      number1 = number2;
      number2 = preValue;
    }
    return result.reverse();
  }

  const handleFiboCustom = () => {
    if (time.minutes && time.seconds) {
      const result = getFibo(time.minutes, time.seconds);
      dispatch(addTime({
        hour: time.hour,
        minutes: time.minutes,
        seconds: time.seconds
      }))
      setTimetoShow({
        hour: time.hour,
        minutes: time.minutes,
        seconds: time.seconds
      })
      setFibo(result);
    }
  }

  const handleFiboReal = () => {
    const minutes = dateState.getMinutes();
    const seconds = dateState.getSeconds();
    dispatch(addTime({
      hour: dateState.getHours(),
      minutes: minutes,
      seconds: seconds
    }));
    setTimetoShow({
      hour: dateState.getHours(),
      minutes: minutes,
      seconds: seconds
    })
    const result = getFibo(minutes, seconds);
    setFibo(result);
  }

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <Content>
      <FiboContent>
        {fibo.map((number, index) => (
          <FiboNumbers>
            {`${number},`} &nbsp;
          </FiboNumbers>
        ))}
      </FiboContent>
      {timeToShow.hour &&
        <FiboNumbers> Time set {`${timeToShow.hour}:${timeToShow.minutes}:${timeToShow.seconds}`}</FiboNumbers>
      }
      <ClocksContent>
        <RealTimeContent>
          {dateState.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: "numeric",
            hour12: true,
          })}
          <CustomButton onClick={handleFiboReal} variant="contained">Crear hora actual</CustomButton>
        </RealTimeContent>
        <CustomTimeContent>
          <DemoItem label={'"hours", "minutes" and "seconds"'}>
            <TimePicker views={['hours', 'minutes', 'seconds']} onChange={(newValue, selectionState) => handleTime(newValue, selectionState)} />
          </DemoItem>
          <CustomButton onClick={handleFiboCustom} variant="contained">Crear serie</CustomButton>
        </CustomTimeContent>
      </ClocksContent>
    </Content>
  )
}

export default Home;
