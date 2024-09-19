import { BrowserRouter as Router} from "react-router-dom"
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes"




export default function App() {
  
  // const [categoryClicked, setCategoryClicked] = useState([]);
  // console.log(categoryClicked);
  //  const location=useLocation();
 
  return (
    <div className='w-full h-full'>
    <Router>
    <AnimatedRoutes/>
    </Router>
    </div>
  )
}
