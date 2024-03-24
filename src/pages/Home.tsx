import Header from "../component/header/Header";
import {CardList} from "../component/EP/EProfile";

//import bg from "./download (3).jpeg"

  
const Home = () => {

  return (
    <>
      <div className="main-img">
        <Header />
        <main>
          <CardList />
        </main>
      </div>
    </>
    )
}
export default Home;