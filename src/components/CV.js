import React,{Component} from "react";
class CV extends React.Component{
    render(){
        return(
            <div class="parent">
            <div class="about">
                
                    <div class="contact">
                        <div> <img src="assets/images/profile.jpg" alt="My Picture"/></div><br/>
                        <div>
                            <h3>Ibrahim Mohamed Zeid</h3>
                        </div><br/>

                        <p><i class="fas fa-briefcase"> Progammer </i></p>
                        <p><i class="fas fa-home"> Egypt, Menofia </i></p>
                        <p><i class="fas fa-envelope "> abrahymzyd43@gmail.com </i></p>
                        <p><i class="fas fa-phone-alt"> 01012958437 </i></p>

                        <br/>
                        <hr/><br/>
                    </div>
                    <div class="edu cation">
                        <i class="fas fa-certificate" style={{fontSize:" x-large" }}>  Education</i>
                        <div>
                            <h3>Faculty of Computers and Information</h3>
                            <p><i class="fa fa-calendar-alt "> NOV 21 2019-  </i><span
                                style={{
                                    color:"white" ,
                                    backgroundColor:"rgb(199, 25, 106)" ,
                                    padding: "5px",
                                    borderradius: "5px"
                            }}>Current</span>
                            </p>
                            <p>Study at Faculty of Computers and Information Menofia University at Computer Sciences Department</p>
                        </div>

                    </div>

                    <br/><br/>
                
            </div>

            <div class="more">
                
                    <div class="skills">
                        <i class="fa fa-asterisk " style={{fontSize:" x-large" }}>  Skills</i>
                        <p>C++</p>
                        <div class="large_Indicator">
                            <div class="small_Indicator" style={{width:"60%"}}>{/* <!--<progress value="70" max="100">70 %</progress>--> */}
                                &nbsp;
                            </div>
                        </div>
                        <p>Java</p>
                        <div class="large_Indicator">
                            <div class="small_Indicator" style={{width:"75%"}}>
                                &nbsp;
                            </div>
                        </div>
                        <p>HTML</p>
                        <div class="large_Indicator">
                            <div class="small_Indicator" style={{width:"55%"}}>
                                &nbsp;
                            </div>
                        </div>
                        <p>CSS</p>
                        <div class="large_Indicator">
                            <div class="small_Indicator" style={{width:"55%"}}>
                                &nbsp;
                            </div>
                        </div>
                        <p>SQL</p>
                        <div class="large_Indicator">
                            <div class="small_Indicator" style={{width:"60%"}}>
                                &nbsp;
                            </div>
                        </div>
                        <br/>
                        <hr/><br/>
                    </div>
                    <div class="languages">
                        <i class="fas fa-globe" style={{fontSize:" x-large" }}>  Languages</i>
                        <p>Arabic</p>
                        <div class="large_Indicator">
                            <div class="small_Indicator" style={{width:"85%"}}>
                                &nbsp;
                            </div>
                        </div>
                        <p>English</p>
                        <div class="large_Indicator">
                            <div class="small_Indicator"  style={{width:"70%"}} >
                                &nbsp;
                            </div>
                        </div>
                    </div>
                

            </div>
    </div>
    
        );
    }
}
export default CV;