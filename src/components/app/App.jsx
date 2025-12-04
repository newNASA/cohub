import './App.css'

import Navbar from '../navbar/navbar'
import Heading from '../heading/heading'
import About from '../about/about'
import Course from '../courses/course'

import FaCode from "../../assets/icons/code.svg"
import LuPalette from "../../assets/icons/pallete.svg"
import RiRobot2Line from "../../assets/icons/robot.svg"
import FaComputer from "../../assets/icons/computer.svg"
import GrLanguage from "../../assets/icons/language.svg"

const coursesData = [
  {
    icon: FaCode,
    title: "Web Development",
    description: "Master modern web technologies and build stunning websites",
    duration: "6 months",
    forwho: "Youth and adults interested in coding",
    topics: ["HTML, CSS, JavaScript", "React & TypeScript", "Backend with Node.js", "Database Management"]
  },
  {
    icon: LuPalette,
    title: "Graphic Design",
    description: "Learn professional design tools and create visual masterpieces",
    duration: "4 months",
    forwho: "Creative minds of all ages",
    topics: ["Adobe Photoshop & Illustrator", "Typography Basics", "Branding & Identity", "Digital Illustration"]
  },
  {
    icon: RiRobot2Line,
    title: "Robotics",
    description: "Build and program robots while learning engineering fundamentals",
    duration: "5 months",
    forwho: "Students aged 10-18",
    topics: ["Basic Electronics", "Robot Design", "Programming with Arduino", "Sensors & Actuators"]
  },
  {
    icon: FaComputer,
    title: "Savodxonlik",
    description: "Kompyuter asoslarini o'rganing va raqamli dunyoda ishonch bilan harakat qiling",
    duration: "3 oy",
    forwho: "Barcha yoshdagilar uchun",
    topics: ["Kompyuterning asosiy tushunchalari", "Ofis dasturlari", "Internet va elektron pochta", "Raqamli xavfsizlik asoslari"]
  },
  {
    icon: GrLanguage,
    title: "Ingliz Tili",
    description: "Ingliz tilini o'rganing va global kommunikatsiya ko'nikmalarini rivojlantiring",
    duration: "4 oy",
    forwho: "Boshlang'ich va o'rta darajadagi o'rganuvchilar",
    topics: ["Grammatika asoslari", "So'z boyligini oshirish", "Tinglash va gapirish ko'nikmalari", "Yozma muloqot"]
  }
]

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Heading />
      <About />
      <Course courses={coursesData} />
    </div>
  )
}

export default App
