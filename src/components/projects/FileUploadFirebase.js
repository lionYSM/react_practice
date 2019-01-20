import React, { Component } from 'react';
import  storage  from 'config/firebase'

class FileUploadFirebase extends Component {
  state = {
    progress: 0,
    image: null,
    url: '',
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  onFileSelect = event => {
    console.log(event.target.files[0]);
    if(event.target.files[0]) {
      const imageInfo = event.target.files[0]
      this.setState({
        image: imageInfo
      })
    }
  }

  onFileUpload = () => {    
    const {image} = this.state;
    console.log(image)
    
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    //uploadTask.on('state_changed',progress, error, complete);
    uploadTask.on('state_changed',
    (snapshot) => {
      // progress function
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      this.setState({progress});
    }, 
    (error) => {
      // error function
      console.log(error);
    }, 
    ()=> {
      // complete function
      storage.ref('images').child(image.name).getDownloadURL().then(url => {
      console.log(url);        
      this.setState({url});
      })
    });
  }
  
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">파이어베이스에 파일업로드 공부중</h5>

          <div className="input-field">
            <progress value={this.state.progress} />
          </div>

          <div className="input-field">
            <input type="file" onChange={this.onFileSelect}/>
            <button onClick={this.onFileUpload}>Upload</button>
          </div>   

          <br/>
          <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="upload" width="300" height="400"/>
                 
        </form>
      </div>
    )
  }
}

export default FileUploadFirebase