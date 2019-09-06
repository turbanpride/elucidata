import React,{Component} from "react";
import Data from './data.json';

import {Table} from 'react-bootstrap';
class Temp extends Component
{
    constructor(props)
    {   
        super(props);
        //this.getData = this.getData.bind(this);
        this.state = {
            responseData: ""
        };
    }
    componentDidMount()
    {
        //this.getData();
    }
    // getData() {
    //     axios.get("https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=b1b15e88fa797225412429c1c50c122a1")
    //   .then(res => {
    //     const persons = res.data;
    //     this.setState({ responseData:persons });
    //   })
    // }
    render()
    {
        var i,tableStructure=[];
        
        //Iterating the JSON and pushing the JSX tableData into tabelStrucutre array
        for(i in Data.list)
        {
           tableStructure.push(
            <tbody key={i}>
            <tr>
              <td>{i}</td>
              <td>{(Data.list[i].name)?(Data.list[i].name):("-")}</td>
              <td>{Data.list[i].main.humidity}</td>
              <td>{Data.list[i].main.pressure}</td>
              <td>{Data.list[i].main.temp_max}</td>
              <td>{Data.list[i].main.temp_min}</td>
              <td>{(Data.list[i].main.sea_level)?(Data.list[i].main.sea_level):("-")}</td>
            </tr>
          </tbody>
           );
        }

        //Using Table from react-bootstrap 
        return(
            <div>
                <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Humidity</th>
                    <th>Pressure</th>
                    <th>Max Temperature</th>
                    <th>Min Temperature</th>
                    <th>Sea Level</th>
                </tr>
                </thead>
                {tableStructure}
                </Table>
               
            </div>
        )
    }
}

export default Temp;
