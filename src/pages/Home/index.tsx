import { Content } from "../../components/Content";
import { SideBar } from "../../components/SideBar";

export function Home(){
  return (
    <div style={{ display:'flex', flexDirection:'row'}}>
      <SideBar />
      
      <Content />
    </div>
  )
}