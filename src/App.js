import React from 'react';
import './App.css';
import axios from 'axios';
import {Button,List,Spin,Carousel,Menu} from 'antd';
import 'antd/dist/antd.css';
import SubMenu from 'antd/lib/menu/SubMenu';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this.state.pnr=[];
    this.state.det=[];
    this.state.item="";
  }
  getValue(e){
   console.log(e.target.value);
   this.setState({
   pnr: e.target.value  
   })

  }
  getPNR(){
let p=this.state.pnr;
let d=this.state.det;

axios.get("http://api.railwayapi.com/v2/pnr-status/pnr/"+p+"/apikey/6iiwocsv52/")
.then((res)=>{
  console.log(res.data);
  d.push(res.data.to_station);
  //console.log(d);
  this.setState({
    det:d,
    item:res.data.to_station.name,
    item2:res.data.from_station.name,
    item3:res.data.train.name,
    item4:res.data.total_passengers,
    item5:res.data.train.number,
    item6:res.data.doj,
    
  }) 
  //console.log(this.state.item);
 
})


  }



  render(){
    return <div className="center">

      <Menu mode="horizontal">
        <SubMenu title={
          <span>Visit GitHub</span>
        }>
        <Menu.Item><a href="">Chandrabhan</a></Menu.Item>
        <Menu.Item><a href="">Gauransh</a></Menu.Item>
        </SubMenu>
        <SubMenu title={
          <span>About</span>
        }>
          <Menu.ItemGroup>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>2</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>

      <Carousel autoplay >
        <div>
          <img width="1400" height="300" src="https://wallpapercave.com/wp/wp498614.jpg"></img>
        </div>
        <div>
          <img width="1400" height="300" src="https://www.elsetge.cat/imagepost/b/4/47419_indian-train-wallpaper.jpg"></img>
        </div>          

      </Carousel>

      <div>
        <h1 className="grey">Indian Railway</h1>
      
      
        <h3 className="black">Check Your PNR Status</h3>
      </div>
     <div><input onChange={(e)=>{this.getValue(e)}}/>
     <Button type="primary" shape="round" icon="search" onClick={()=>{this.getPNR()}}>SUBMIT</Button></div>
      <List className="text">
       <List.Item className="text">To-Station - {this.state.item}</List.Item>
       <List.Item className="text">From-Station - {this.state.item2}</List.Item>
       <List.Item className="text">Train - {this.state.item5}  {this.state.item3}</List.Item>
       <List.Item className="text">No. of Passengers on Your ticket - {this.state.item4}</List.Item>
       <List.Item className="text">Date Of Journey - {this.state.item6}</List.Item>
       
      </List>
      
    </div>
  }
}

export default App;
