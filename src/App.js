import React from "react";
import "./style.css";


function Head (props){
  return (
    <div className="head" style={head}>
      <img
      style={imgStyle}
      className="img-head"
      src="https://img2.freepng.es/20180319/yge/kisspng-computer-icons-person-symbol-meridian-energy-group-person-icon-145444-bryan-le-photography-5ab04a4e37af55.3382397515215027982281.jpg"/>
      <div className="navBar" style={navBar} >
      <ul className="navbar-nav" style={listHead}>
        <li className="nav-item">
          <a className="nav-link js-scroll active" href="#home">Home</a>
          </li>
        <li className="nav-item">
            <a className="nav-link js-scroll" href="#about">About</a>
            </li>
        <li className="nav-item">
              <a className="nav-link js-scroll" href="#work">Work</a>
              </li>
        <li className="nav-item">
                <a className="nav-link js-scroll" href="#contact">Contact</a>
        </li>
      </ul>
      </div>
      </div>

  );
};

function Welcome(props){
  return(
    <div className="welcome-container" style={welcomeContainer}>
    <div className="welcome">
      <h1 className="welcome-name">Hellow, i am {props.name}</h1>
      <h2 classname="welcome-work">{props.work} </h2>
      </div>
    <div className="button-work">
    <button onclick="activateLasers()">
  View my Work
</button>
    </div>
    </div>
  );
};

function AboutMe(){
  return(
    <div className="sections" style={sections}>

      <section id="home">
        <h2>Home</h2>
        <p>Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis.</p>
        </section>

      <section id="About">
        <h2>About me</h2>
        <p>Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis.</p>
        </section>

        <section id="work">
        <h2>Work</h2>
        <p>Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis.</p>
        </section>

        <section id="contact">
        <h2>Contact</h2>
        <p>Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis.</p>
        </section>


    
      </div>
  );
};

export default function App() {
  return (
    <div>
      <Head />,
      <Welcome name="Daniel Caicedo" work="Front end Developer"/>,
      <AboutMe/>
          </div>
  );
}


const head ={
display: "flex",
justifyContent: "space-between",
width:"1000px",
margin:"auto"
}

const imgStyle={
  width: "80px",
  height: "80px"
}

const listHead={
  display: "flex",
  width:"500px",
  listStyle: "none",
  margin:"20px",
  justifyContent: "space-around",
}

const navBar={
  /* backgroundColor: "red", */
  display: "inline-block",
  justifyContent: "space-between",
  height: "50px",

}

const welcomeContainer={
  display:"flex",
  flexDirection: "column",
  justifyContent:"center",
  width:"500px",
  margin:"auto"


}

const sections={
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width:"600px",
  margin:"auto"
}