import './Rank.css';
import React from 'react';
import stars from './assets/bg-stars.png';
import planets from './assets/bg-planets.png';
import Logo from './assets/logo.png'
import IconUser from './assets/userIcon.png'
import { Link } from 'react-router-dom';
function getRankSuffix(rank) {
    if (rank === 1) return "st";
    if (rank === 2) return "nd";
    if (rank === 3) return "rd";
    return "th";
}
function Rank(){
    // Giả sử bạn có một danh sách các người dùng và điểm số của họ
    const users = [
        { name: 'Phạm Duy Hoàng', score: 95 },
        { name: 'Phạm Đức Minh', score: 85 },
        { name: 'Vũ Đình Tuấn Anh', score: 78 },
        { name: 'Nguyễn Văn Linh', score: 86 },
        { name: 'Nguyễn Văn Linh', score: 86 },
        { name: 'Nguyễn Văn Linh', score: 86 },
        { name: 'Nguyễn Văn Linh', score: 86 },
        { name: 'Nguyễn Văn Linh', score: 86 },
        { name: 'Nguyễn Văn Linh', score: 86 },
        { name: 'Nguyễn Văn Linh', score: 86 },
        // ...Thêm các người dùng khác
    ];



    const myRank = { name: 'Your Name', score: 79 };
    users.push(myRank);
    users.sort((a, b) => a.score - b.score);
    const myRankPosition = users.findIndex(user => user === myRank) + 1;
    return(
        <>
            <div className='radial-gradient'>
                <div style={{ backgroundImage: `url(${stars})`, width: '100%', height: '100%', position: 'absolute' }} className='result_layout'>
                    <div style={{ backgroundImage: `url(${planets})`, width: '100%', height: '100%', position: 'absolute' }} className='result_planets'>
                        <div className="heading-container head_result">
                            <img className='logo' src={Logo} />
                            <div className='button_head'>
                                <div style={{ marginRight: '20px' }} className="cta cta-hvr ctb">
                                    <Link style={{ padding: '10px 10px', fontSize: '20px' }} to="/result">SUMMARY</Link>
                                </div>
                                <div style={{ marginRight: '20px' }} className="cta cta-hvr ctb">
                                    <Link style={{ padding: '10px 10px', fontSize: '20px' }} to="/detail">detailed statistics</Link>
                                </div>
                                <div style={{ marginRight: '20px' }} className="cta cta-hvr ctb">
                                    <Link style={{ padding: '10px 10px', fontSize: '20px' }} to="/solution">SOLUTIONS</Link>
                                </div>
                                <div style={{ marginRight: '20px' }} className="cta cta-hvr ctb">
                                    <Link style={{ padding: '10px 10px', fontSize: '20px' }} to="/forum">FORUM</Link>
                                </div>
                                <div style={{ marginRight: '20px' }} className="cta cta-hvr">
                                    <Link style={{ padding: '10px 10px', fontSize: '20px' }} to="/rank">Rank</Link>
                                </div>
                            </div>
                            <Link to='/user'><img className='user-icon1' src={IconUser} /></Link>
                        </div>
                        <div className='comet-rain' style={{ height: '0%' }}>
                            <svg _ngcontent-ngb-c46="" aria-hidden="true" data-name="comet" height="173.05" id="svg-comet" viewBox="0 0 195 173.05" width="195" className="svg-defs"><symbol _ngcontent-ngb-c46="" id="comet"><path _ngcontent-ngb-c46="" d="M192.39.66c-33.66,31.46-93.3,81.16-129,108.88L3.42,156c-5,3.89-4.29,11.28.74,15.4s12.84-.83,13.1-1.07C51.09,138.62,82.6,104.72,116.64,73c8.89-8.29,66.23-59.5,77.47-70.13C196.17,1,194.24-1.08,192.39.66Z"></path></symbol></svg>
                            <svg _ngcontent-fjy-c46="" aria-hidden="true" height="0" width="0"><defs _ngcontent-fjy-c46=""><linearGradient _ngcontent-fjy-c46="" gradientUnits="userSpaceOnUse" id="gradient" x1="194.94" x2="11.72" y1="4.2" y2="161.98"><stop _ngcontent-fjy-c46="" offset="0%" stopColor="#fff" stopOpacity="0.03"></stop><stop _ngcontent-fjy-c46="" offset="100%" stopColor="var(--t-sun-color)"></stop></linearGradient></defs></svg>
                            <svg _ngcontent-fjy-c46="" aria-hidden="true" height="173.05" viewBox="0 0 195 173.05" width="195" className="comet-01 comet-instance"><use _ngcontent-fjy-c46="" xlinkHref="#comet"></use></svg>
                            <svg _ngcontent-ngb-c46="" aria-hidden="true" height="173.05" viewBox="0 0 195 173.05" width="195" className="comet-02 comet-instance"><use _ngcontent-ngb-c46="" xlinkHref="#comet"></use></svg>
                            <svg _ngcontent-ngb-c46="" aria-hidden="true" height="173.05" role="presentation" viewBox="0 0 195 173.05" width="195" className="comet-03 comet-instance"><use _ngcontent-ngb-c46="" xlinkHref="#comet"></use></svg>
                            <svg _ngcontent-ngb-c46="" aria-hidden="true" height="173.05" viewBox="0 0 195 173.05" width="195" className="comet-04 comet-instance"><use _ngcontent-ngb-c46="" xlinkHref="#comet"></use></svg>
                            <svg _ngcontent-ngb-c46="" aria-hidden="true" height="173.05" viewBox="0 0 195 173.05" width="195" className="comet-05 comet-instance"><use _ngcontent-ngb-c46="" xlinkHref="#comet"></use></svg>
                            <svg _ngcontent-ngb-c46="" aria-hidden="true" height="173.05" viewBox="0 0 195 173.05" width="195" className="comet-06 comet-instance"><use _ngcontent-ngb-c46="" xlinkHref="#comet"></use></svg>
                        </div>
                        <div className='container9'>
                            <div className='rank-table'>
                                <div className="rank-title">Ranking</div>
                                {users.slice(0, 10).map((user, index) => (
                                    <div key={index} className={`rank-row rank-${index + 1}`}>
                                        <div className="rank">
                                            {index + 1}
                                            <sup>{getRankSuffix(index + 1)}</sup>
                                        </div>
                                        <div className="name center">{user.name}</div>
                                        <div className="score">{user.score} CO2</div>
                                    </div>
                                ))}
                                <div className="title-myrank">My Rank</div>
                                <div className={`myrank-row rank-${myRankPosition}`}>
                                    <div className="rank">
                                        {myRankPosition}
                                        <sup>{getRankSuffix(myRankPosition)}</sup>
                                    </div>
                                    <div className="name center">{myRank.name}</div>
                                    <div className="score">{myRank.score} CO2</div>
                                </div>
                            </div>
                            
                            <div className="fixed-button cta cta-hvr">
                                <Link to="/food">Re-take the Quiz</Link>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Rank;