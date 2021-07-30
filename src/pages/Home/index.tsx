import { Content } from "../../components/Content";
import { SideBar } from "../../components/SideBar";

import './style.scss'

export function Home(){
  return (
    <div className="homeContainer">
      <SideBar />
      
      <Content />
    </div>
  )
}