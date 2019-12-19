/* eslint-disable */
import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import TextField from '@material-ui/core/TextField';

class UploadPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      process: 'selectPhoto',
      radioButtonChecked: false
    };
    this.uploadButtonClicked = this.uploadButtonClicked.bind(this);
    this.saveButtonClicked = this.saveButtonClicked.bind(this);
  }

  uploadButtonClicked() {
    this.setState({ process: 'editText' });
    // Calls Google Vision API.
  }

  saveButtonClicked() {
    this.setState({ process: 'saved' });
    // Saves JSON to the database.
  }

  renderProcess() {
    switch (this.state.process) {
      case 'selectPhoto':
        return (
          <div className="centerVertically">
            <div
              style={{
                borderStyle: 'dashed',
                borderWidth: '3px',
                borderColor: 'grey',
                borderRadius: '10px',
                marginBottom: '20px'
              }}
            >
              <label for="fileSelector">
                <PhotoCameraOutlinedIcon
                  style={{
                    height: '6em',
                    width: '6em',
                    color: 'grey',
                    margin: '40px 30px 20px'
                  }}
                />
              </label>
              <input
                type="file"
                style={{ display: 'none' }}
                id="fileSelector"
              />
            </div>
            <Button className="buttonTheme" onClick={this.uploadButtonClicked}>
              Upload
            </Button>
          </div>
        );
      case 'editText':
        return (
          <div className="centerVertically">
            <TextField
              multiline
              rows="10"
              defaultValue="Returned Text"
              margin="normal"
              variant="outlined"
              style={{ width: '300px' }}
            />
            <div
              className="centerHorizontally"
              style={{ marginBottom: '10px' }}
            >
              <input
                type="checkbox"
                style={{
                  height: '20px',
                  width: '20px',
                  marginLeft: '0px',
                  marginRight: '10px'
                }}
                onClick={() =>
                  this.setState({
                    radioButtonChecked: !this.state.radioButtonChecked
                  })
                }
              />
              I have checked all the info above
            </div>
            <Button
              className="buttonTheme"
              onClick={this.saveButtonClicked}
              disabled={!this.state.radioButtonChecked}
            >
              Save
            </Button>
          </div>
        );
      case 'saved':
        return <div></div>;
    }
  }

  render() {
    return <div className="App">{this.renderProcess()}</div>;
  }
}

export default UploadPage;
/* eslint-disable */
