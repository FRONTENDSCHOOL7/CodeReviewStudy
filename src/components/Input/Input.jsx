import React, { useState } from 'react';
import { Words, InputTag, Form, Btn, FingerImg, BtnBox } from './Input.styled';
import finger from '../../images/finger.svg';
import Output from '../Output/Output';

export default function Input() {
  const [job, setJob] = useState({ input: '', display: '' });
  const [time, setTime] = useState({ input: '', display: '' });
  const [viewState, setViewState] = useState(false);

  const onDisplayInfo = (e) => {
    e.preventDefault();
    if (job.input === '') return alert('직업을 입력해주세요');
    if (time.input === '') return alert('시간을 입력해주세요');

    setJob({ ...job, display: job.input });
    setTime({ ...time, display: parseInt(10000 / time.input) });
    setViewState(true);
  };

  return (
    <>
      <Form onSubmit={(e) => onDisplayInfo(e)}>
        <Words>
          나는
          <InputTag
            placeholder='예)프로그래밍'
            type='text'
            value={job.input}
            onChange={(e) => setJob({ ...job, input: e.target.value })}
          />
          전문가가 될 것이다.
        </Words>
        {window.innerWidth > 768 ? (
          <>
            <Words>
              그래서 앞으로 매일 하루에
              <InputTag
                placeholder='예)5'
                type='number'
                value={time.input}
                onChange={(e) => setTime({ ...time, input: e.target.value })}
              />
              시간씩 훈련할 것이다.
            </Words>
            <BtnBox>
              <Btn>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</Btn>
              <FingerImg src={finger} alt='fingerImg' />
            </BtnBox>
          </>
        ) : (
          <>
            <Words>그래서 앞으로 매일 하루에</Words>
            <Words>
              <InputTag
                placeholder='예)5'
                type='number'
                value={time.input}
                onChange={(e) => setTime({ ...time, input: e.target.value })}
              />
              시간씩 훈련할 것이다.
            </Words>
            <BtnBox>
              <Btn>
                나는 며칠 동안 훈련을 해야
                <br /> 1만 시간이 될까?
              </Btn>
              <FingerImg src={finger} alt='fingerImg' />
            </BtnBox>
          </>
        )}
      </Form>
      <Output job={job.display} time={time.display} view={viewState} />
    </>
  );
}
