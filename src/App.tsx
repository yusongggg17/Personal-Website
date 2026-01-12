import './App.css';
//import files
import Headshot from './assets/Professional_Headshot_Yusong_Liang_croped.jpeg';
function App() {
  return (
    <body>
      <div className="Title">
        <h1>Yusong Liang's Personal Website</h1>
      </div>
      
      <div>
        <img className="profile-image" src={Headshot} alt="Headshot" />
        <p className="Introduction">
          My name is Yusong Liang,
          I am a student at the Florida State University.
          I am a Computer Science student.
        </p>
      </div>


    </body>
  )
}




export default App;
