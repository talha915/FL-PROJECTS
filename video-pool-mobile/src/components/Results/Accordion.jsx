import React from 'react';

function Accordions() {
    return (
        <ul className="list-unstyled progress-result">
            <li>
                <div className="title-wrap">
                    <div className="img">
                        <img src="/images/avtar01.png" width="29" height="29" alt="image description" />
                    </div>
                    <strong className="title">Julia</strong>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={{width: "22%"}} aria-valuenow="22" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <strong className="persentage">22%</strong>
            </li>
            <li>
                <div className="title-wrap">
                    <div className="img">
                        <img src="/images/avtar02.png" width="29" height="29" alt="image description" />
                    </div>
                    <strong className="title">Sanders</strong>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={{width: "19%"}} aria-valuenow="19" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <strong className="persentage">19%</strong>
            </li>
            <li>
                <div className="title-wrap">
                    <div className="img">
                        <img src="/images/avtar02.png" width="29" height="29" alt="image description" />
                    </div>
                    <strong className="title">Buttigieg</strong>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={{width: "18%"}} aria-valuenow="18" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <strong className="persentage">18%</strong>
            </li>
            <li>
                <div className="title-wrap">
                    <div className="img">
                        <img src="/images/avtar02.png" width="29" height="29" alt="image description" />
                    </div>
                    <strong className="title">Biden</strong>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={{width: "17%"}} aria-valuenow="17" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <strong className="persentage">17%</strong>
            </li>
            <li>
                <div className="title-wrap">
                    <div className="img">
                        <img src="/images/avtar01.png" width="29" height="29" alt="image description" />
                    </div>
                    <strong className="title">Klobuchar</strong>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={{width: "04%"}} aria-valuenow="04" aria-valuemin="0" aria-valuemax="100" ></div>
                </div>
                <strong className="persentage">04%</strong>
            </li>
            <li>
                <div className="title-wrap">
                    <div className="img">
                        <img src="/images/avtar01.png" width="29" height="29" alt="image description" />
                    </div>
                    <strong className="title">Harris</strong>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={{width: "03%"}} aria-valuenow="03" aria-valuemin="0" aria-valuemax="100" ></div>
                </div>
                <strong className="persentage">03%</strong>
            </li>
            <li>
                <div className="title-wrap">
                    <div className="img">
                        <img src="/images/avtar01.png" width="29" height="29" alt="image description" />
                    </div>
                    <strong className="title">Yang</strong>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={{width: "03%"}} aria-valuenow="03" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <strong className="persentage">03%</strong>
            </li>
        </ul >
    )
}
export default Accordions;
