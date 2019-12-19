import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
const Bgg = ({ cd, onNextQuestion, onAdding }) => {
  const [daa, setDAA] = useState(false);
  const [dab, setDAB] = useState(false);
  const [dac, setDAC] = useState(false);
  const [dad, setDAD] = useState(false);
  const [starHover, setStarHover] = useState(true);
  const [da, setDA] = useState("");
  const [cc, setCC] = useState(0);
  const [htb, setHTB] = useState(false);
  const [nt, setNT] = useState(false);
  const [txtName, setTxtName] = useState("");
  const [colorA, setColorA] = useState(false)
  const [colorB, setColorB] = useState(false)
  const [colorC, setColorC] = useState(false)
  const [colorD, setColorD] = useState(false)
  const [question, setQuestion] = useState(false)
  const [invisible, setInvisible] = useState(false)

  const [bd, setBD] = useState(
    [{
      id: 1,
      name: "none",
      point: 0
    },
    {
      id: 2,
      name: "none",
      point: 0
    },
    {
      id: 3,
      name: "none",
      point: 0
    },
    {
      id: 4,
      name: "none",
      point: 0
    },
    {
      id: 5,
      name: "none",
      point: 0
    },
    {
      id: 6,
      name: "none",
      point: 0
    },
    {
      id: 7,
      name: "none",
      point: 0
    },
    {
      id: 8,
      name: "none",
      point: 0
    },
    {
      id: 9,
      name: "none",
      point: 0
    },
    {
      id: 10,
      name: "none",
      point: 0
    }]
  );
  const [kq, setKQ] = useState(true)
  return (
    <div>
      {
        kq ? (
          <div className="test4">
            <span className="test2">Câu số {cd.id}: {cd.ch}</span>
            <br></br>
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="test5" ><button className="test6 test7" style={{ color: colorA ? "red" : null, backgroundColor: question === "A" ? "blue" : null }} onClick={() => { setDAA(true); setDA("A"); setColorA(true); setColorB(false); setColorC(false); setColorD(false) }}>A: {cd.daa}</button></div>
                <div className="test5 ml-5"><button className="test6 test8" style={{ color: colorB ? "red" : null, backgroundColor: question === "B" ? "blue" : null }} onClick={() => { setDAB(true); setDA("B"); setColorA(false); setColorB(true); setColorC(false); setColorD(false) }}>B :{cd.dab}</button></div>
              </div>
              <div className='row d-flex justify-content-center'>
                <div className="test5 "><button className="test6 test9" style={{ color: colorC ? "red" : null, backgroundColor: question === "C" ? "blue" : null }} onClick={() => { setDAC(true); setDA("C"); setColorA(false); setColorB(false); setColorC(true); setColorD(false) }}>C: {cd.dac}</button></div>
                <div className="test5 ml-5"><button className="test6 test10" style={{ color: colorD ? "red" : null, backgroundColor: question === "D" ? "blue" : null }} onClick={() => { setDAD(true); setDA("D"); setColorA(false); setColorB(false); setColorC(false); setColorD(true) }}>D: {cd.dad}</button></div>
              </div>
            </div>
            {starHover && <button className="btn btn-primary test3" onClick={() => {
              if (da === cd.dadung) { setCC(cc + 1) }

              setQuestion(cd.dadung)
              setDAA(false)
              setDAB(false)
              setDAC(false)
              setDAD(false)
              setStarHover(false)
              setInvisible(true)

            }}>Đáp án</button>}
            {invisible && <button className="btn btn-primary test3" onClick={() => {
              if (cd.id < 10) {
                onNextQuestion(cd.id + 1);
                setInvisible(false)
                setQuestion(false)
                setColorA(false)
                setColorB(false)
                setColorC(false)
                setColorD(false)
                setStarHover(true)
              }
              else setKQ(false);
            }}>Câu kế tiếp</button>}
          </div>
        ) : (
            <div>
              {!htb ? (
                <div>
                  <div className="test4">
                    <div className="test12">Chúc mừng bạn!<br></br> Bạn đã trả lời đúng: {cc}/10 câu</div>
                    <br></br>
                    {/* <Button className="btn btn-secondary test3 " onClick={() => setNT(true)} >Luu diem</Button> */}
                    <Button className="btn btn-danger test3 d-flex justify-content-center" onClick={() => { onAdding(true); onNextQuestion(1) }} >Bắt đầu lại</Button>
                    <br></br>
                  </div>
                  <div>
                    {
                      nt &&
                      <div>
                        <Form.Control type="text" placeholder="enter name...." value={txtName} onChange={event => setTxtName(event.target.value)}></Form.Control>
                        <Button onClick={() => setHTB(true)}>Submit</Button>
                      </div>
                    }
                  </div>
                </div>
              ) : (
                  <div>
                    <table>
                      <tr>
                        <th>stt</th>
                        <th>Name</th>
                        <th>Point</th>
                      </tr>
                      {
                        bd.map(value => (
                          <tr>
                            <th>{value.id}</th>
                            <th>{value.name}</th>
                            <th>{value.point}</th>
                          </tr>
                        ))
                      }
                    </table>
                  </div>
                )
              }

            </div>
          )
      }
    </div>

  )
}

export default Bgg