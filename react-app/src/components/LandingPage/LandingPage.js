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
       <div style={{display:'flex', marginTop:'5%'}}>
           <img src='https://i.imgur.com/ZLHGhCu.png' style={{width:'60%', borderRadius:'5px',marginRight:'3%'}}></img>
           <div style={{textAlign:'center', width:'40%', height:'10%',marginTop:'20%'}}>
           <h2>join offergram to buy and sell locally, simply message the seller to meet and buy</h2>
           
           <button onClick={onClick} className='demoword' style={{ color:'#00a87e', height:'30%',cursor:'pointer'}}> Try Demo</button>
           </div>
       </div>

       <div>
                        <h2>Technologies used</h2>
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

       <div>
           <h2>my other projects</h2>
           <a href='https://musichub-aa.herokuapp.com/'>
               <img src='https://i.imgur.com/oSJSZc6.png' style={{width:'40%', height:'300px', borderRadius:'1%', marginRight:'15%'}}></img>
           </a>
           <a href='https://afternoon-fjord-07018.herokuapp.com/'>
              <img src='https://i.imgur.com/n50nx0e.png' style={{width:'40%', height:'300px', borderRadius:'1%'}}></img>
           </a>
       </div>

       <div>
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

       </div>

        
     </>
 )
}

export default LandingPage