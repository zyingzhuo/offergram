import { AiFillLinkedin } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session"

function LandingPage() {

    const dispatch=useDispatch()
    const onClick = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login('demo@aa.io', 'password'))
    
      }
 return (
     <>
       <div style={{display:'flex', marginTop:'3.5%'}}>
           <img src='https://i.imgur.com/ZLHGhCu.png' style={{width:'60%', borderRadius:'5px',marginRight:'3%'}}></img>
           <div style={{textAlign:'center', width:'40%', height:'10%',marginTop:'10%'}}>
           <h2>Buy and sell locally</h2>
           <h3>Trusted by over 1,000,000 users in the U.S</h3>
           
           <button onClick={onClick} className='demoword' style={{ color:'#00a87e', height:'30%',cursor:'pointer',fontWeight:'bold'}}> Try Demo</button>
           </div>
       </div>

       <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'5%', marginLeft:'15%'}}>
            <div style={{textAlign:'center'}}>
                <div style={{width:'60%', fill:'#00a87e'}} ><i className="fas fa-funnel-dollar" style={{color:'#00a87e'}} ></i></div>
                <h4 style={{width:'60%', color:'#6b7177', fontWeight:'400'}}>create your listing in under just one minute.</h4>
            </div>
            <div style={{textAlign:'center'}}>
                <div style={{width:'60%'}}><i className="fas fa-envelope-open-text" style={{color:'#00a87e'}}></i></div>
                <h4 style={{width:'60%', color:'#6b7177', fontWeight:'400'}}>direct message the seller for the transaction</h4>
            </div>
            <div style={{textAlign:'center'}}>
                <div style={{width:'60%'}}><i class="fas fa-american-sign-language-interpreting" style={{color:'#00a87e'}}></i></div>
                <h4 style={{width:'60%', color:'#6b7177', fontWeight:'400'}}>real time authentic sellers review, so you can buy with confidence</h4>
            </div>
       </div>
       <div style={{borderBottom:'1px #6b7177 solid', width:'73%',marginLeft:'14%', marginTop:'5%'}}></div>
       <div style={{display:'flex',alignItems:'center', flexDirection:'column'}}>
        <h4 style={{color:'#212326', width:'30%', textAlign:'center', fontSize:'1em', marginBottom:'1em', lineHeight:'1.5'}}>"OfferGram is better than any other platform we've used, and we've played with them all."</h4>
       <h5 style={{fontWeight:'700',color:'#42474c'}}>Selina Gosling, OfferGram user</h5>
       <button onClick={onClick} className='demoword' style={{ color:'#00a87e', height:'30%',cursor:'pointer',fontWeight:'bold'}}> Try Demo</button>
       </div>

       {/* <div style={{borderBottom:'1px #6b7177 solid', width:'73%',marginLeft:'14%', marginTop:'5%'}}></div> */}

       <footer style={{backgroundColor:'#00a87e',paddingBottom:'3%', color:'white', width:'100vw'}}>
                        <h2 style={{textAlign:'center', marginTop:'5%'}}>Technologies used</h2>
                        <div style={{display:'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',rowGap:'30PX', columnGap:'20px', textAlign:'center', marginTop:'5%'}}>
                        <div>
                            <i className="devicon-python-plain tech">Python</i>
                        </div>
                        <div>
                            <i className="devicon-javascript-plain tech">JavaScript</i>
                        </div>

                        <div>
                            <i className="devicon-react-original tech">React</i>
                        </div>

                        <div>
                            <i className="devicon-redux-original tech" >Redux</i>
                        </div>

                        <div>
                            <i className="devicon-html5-plain tech">HTML</i>
                        </div >

                        <div>
                            <i className="devicon-css3-plain tech">CSS</i>
                        </div >

                        <div>
                            <i className="devicon-flask-original tech" >Flask</i>
                        </div >

                        <div>
                            <i className="devicon-postgresql-plain tech" >PostgreSQL</i>
                        </div >

                        <div>
                            <i className="devicon-sqlalchemy-plain tech" >SQLAlchemy</i>
                        </div >

                        <div>
                            <i className="devicon-docker-plain tech">Docker</i>
                        </div >
                        </div>

       </footer>

       {/* <div>
           <h2>my other projects</h2>
           <a href='https://musichub-aa.herokuapp.com/'>
               <img src='https://i.imgur.com/oSJSZc6.png' style={{width:'40%', height:'300px', borderRadius:'1%', marginRight:'15%'}}></img>
           </a>
           <a href='https://afternoon-fjord-07018.herokuapp.com/'>
              <img src='https://i.imgur.com/n50nx0e.png' style={{width:'40%', height:'300px', borderRadius:'1%'}}></img>
           </a>
       </div> */}

        {/* <div style={{borderBottom:'1px #6b7177 solid', width:'73%',marginLeft:'14%', marginTop:'5%'}}></div>     */}

       {/* <div style={{textAlign:'center'}}>
            <h2>Contact</h2>
            <h2>Yingjia Zhuo</h2>
            <div>
                <a href='https://github.com/zyingzhuo' target="_blank" rel='noreferrer' style={  {textDecoration:'none'}}>
                                <i className="fab fa-github fa-1x tech2" ></i>
                </a>

                <a href='https://www.linkedin.com/in/yingjia-zhuo-25a474170/' target="_blank" rel='noreferrer' style={{  textDecoration: 'none' }}>
                    <i className="fab fa-linkedin fa-1x tech2" ></i>
                </a>
            </div>

       </div> */}

        
     </>
 )
}

export default LandingPage