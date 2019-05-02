import { Component, OnInit } from '@angular/core';
import { robotList } from '../planet';
import { newrobotList } from '../planet'

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.css']
})
export class RobotComponent implements OnInit {

  constructor() { }

  public robotList = robotList;
  public newrobotList = newrobotList;


  ngOnInit() {

  }

  chooseRobot(name: string, photo: string, chat) {

    /*if(name="Oscar"){
      newrobotList.push(robotList[1])
    }else if(name="Robotus"){
      newrobotList.push(robotList[2])
    }else if(name="Tod"){
      newrobotList.push(robotList[3])
    }else if(name="Bender"){
      newrobotList.push(robotList[0])
    }

    console.log(name);
  }*/

    /*if (name = "Bender") {
      newrobotList.push({ name:name, photo:photo });
    } else if (name = "Oscar") {
      newrobotList.push({ name:name, photo:photo });
    } else if (name = "Robotus") {
      newrobotList.push({ name:name, photo:photo });
    } else if(name="Tod"){
      newrobotList.push({ name:name, photo:photo });
    }*/
    this.newrobotList.push({ name: name, photo: photo });
    if (newrobotList.length > 1) {
      this.newrobotList.splice(0, 1)
    }

    console.log(newrobotList)
  }

}
