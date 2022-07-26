import React,{Component,useEffect,useState} from 'react'

import ReactPaginate from "react-paginate"
const per_page=5;
class ImageResults extends Component {

    constructor(){
       
      super();

      this.state = {
        pictures: [],
      };

    }
  
    componentDidMount(){

      fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+process.env.REACT_APP_API_KEY+'&tags=nyc&per_page=10&page=1&format=json&nojsoncallback=1')
      .then(function(response){
        return response.json();
      })


      .then(function(j){

        let picArray = j.photos.photo.map((pic) => {
          
          var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
         
          return(
            <img alt="cats" src={srcPath}></img>
          )

        })

        this.setState({pictures: picArray});


      }.bind(this))

    }
  
    render() {
      return (
        <div className="App">
          <header className="App-header">
          
            <h1 className="App-title">Flicker-Album</h1>
           
            <div>
              <input placeholder='Enter search'></input>
            </div>
          </header>

          <p className="App-intro" mb="3px" p="4px">
            {this.state.pictures}
          </p>

        </div>
      );
    }
  }
  

export default ImageResults