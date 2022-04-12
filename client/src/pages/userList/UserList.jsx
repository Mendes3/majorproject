import "./userList.css"
import React, { Component } from 'react'
export default class UserList extends Component {
    constructor(props) {
      super(props)
      this.state = {
        users: [],
        isLoading: false,
        isError: false
      }
      this.renderTableHeader = this.renderTableHeader.bind(this);
      this.renderTableRows = this.renderTableRows.bind(this);
    }
  
  async componentDidMount() {
    this.setState({ isLoading: true })
    const response = await fetch('http://localhost:3001/register', {
      method:'get',
      headers: {
        'Content-Type': 'application/json',
        // 'API-Key': 'secret',
        'Accept': 'application/json'
      }
    })
    console.log(response);
    if (response.ok) {
      const users = await response.json()
      console.log(users)
      this.setState({ users, isLoading: false })
    } else {
      this.setState({ isError: true, isLoading: false })
    }
  }
  renderTableHeader = () => {
    
     return Object.keys(this.state.users[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
  }
  renderTableRows = () => {
    return this.state.users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.firstname}</td>
          <td>{user.lastname}</td>
          <td>{user.password}</td>
          <td>{user.emaiil}</td>
          <td>{user.gender}</td>
          <td>{user.device}</td>
          <td>{user.admin}</td>
          <td>{user.address}</td>
          <td>{user.confirmpass}</td>
          <td>{user.contactnum}</td>
          <td>{user.userid}</td>          
        </tr>
      )
    })
  }
  
  render() {
    const { users, isLoading, isError } = this.state

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (isError) {
      return <div>Error</div>
    }

    return users.length > 0
      ? (
        <table>
          <thead>
            <tr>
              {this.renderTableHeader()}
            </tr>
          </thead>
          <tbody>
            {this.renderTableRows()}
          </tbody>
        </table>
      ) : (
        <div>
          No users.
      </div>
      )
  }

}

