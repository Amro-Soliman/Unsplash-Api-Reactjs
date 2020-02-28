import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {

     state = { picQuery : '',
                src : [],
                description: '',
                updated_at: '',
                authorName: '',
                bio: '',
                instagramUsername: ''};


    

    updatePicQuery = event => {
        this.setState({ picQuery: event.target.value });

    }


    handleKeyPress = event => {
        if (event.key === 'Enter') {

            this.searchPic();
            // this.searchPicdl();
 
        }
    }

    searchPicdl = () => {

        console.log(this.state.picQuery);
    }
    searchPic = () => {
        axios.get('https://api.unsplash.com/search/photos', {
          params: { query: this.state.picQuery},
          headers: {
              Authorization: {'Client-ID': '5cd94e55c0d13799243876f08ad40c53abb5a526e0482dfd78eff8ccb221fc92'}
          }
        }).then(response => {
            console.log(response.data.results[0].user);
            this.setState({ src: response.data.results[0].urls.small });
            this.setState({ description: response.data.results[0].alt_description });
            this.setState({ updated_at: response.data.results[0].updated_at });
            this.setState({ authorName: response.data.results[0].user.name });
            this.setState({ bio: response.data.results[0].user.bio });
            this.setState({ instagramUsername: response.data.results[0].user.instagram_username });



            


        })

    
      } 

    render() {

        return (
            <div>
                <input
                
                onChange={this.updatePicQuery}
                onKeyPress={this.handleKeyPress}
                placeholder='search a picture'
                />
                <button onClick={this.searchPic}>Search</button>

               <p> <img src={this.state.src} alt='' /> </p>
               
               {
                        (this.state.authorName === '')
                        ? ''
                        : <div> <b>Author name</b>: {this.state.authorName} </div> 
                   }

{
                        (this.state.bio === '')
                        ? ''
                        : <div> <b>Bio</b>: {this.state.bio} </div> 
                   }
                   {
                        (this.state.instagramUsername === '')
                        ? ''
                        : <div> <b>instagram username</b>: {this.state.instagramUsername} </div> 
                   }

                    {
                  (this.state.description === '')
                  ? <div> Please insert your searching term </div> 
                  : <div> <b>Description </b>: {this.state.description} </div> 
                   } 

                   {
                        (this.state.updated_at === '')
                        ? ''
                        : <div> <b>Updated at</b>: {this.state.updated_at} </div> 
                   }

               
            </div>
        )

    }
}

    export default Search;