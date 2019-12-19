/* eslint-disable */
import React from 'react';
import './App.css';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import SearchIcon from '@material-ui/icons/Search';
import ForumIcon from '@material-ui/icons/Forum';
import CloudOffIcon from '@material-ui/icons/CloudOff';
import UploadPage from './components/UploadPage.js';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'offline'
    };
  }

  renderTab() {
    switch (this.state.tab) {
      case 'offline':
        return <CloudOffIcon />;
      case 'upload':
        return <UploadPage />;
      case 'search':
        return <SearchIcon />;
      case 'support':
        return <ForumIcon />;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="navbarTop">After-sales Manager</div>
          {this.renderTab()}
          <div className="navbarBottom" style={{ backgroundColor: '#09d3ac' }}>
            <PublishIcon
              style={{ height: '30px', width: '30px', color: 'white' }}
              onClick={() => this.setState({ tab: 'upload' })}
            />
            <SearchIcon
              style={{ height: '30px', width: '30px', color: 'white' }}
              onClick={() => this.setState({ tab: 'search' })}
            />
            <ForumIcon
              style={{ height: '30px', width: '30px', color: 'white' }}
              onClick={() => this.setState({ tab: 'support' })}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default Homepage;
/* eslint-disable */
