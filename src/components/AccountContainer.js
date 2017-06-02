import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'


class AccountContainer extends Component {
  constructor() {
    super()

    this.state = {
      transactions: [
        {
          id: 1,
          posted_at: "2017-02-28 11:00:00",
          description: "Leather Pants, Gap co.",
          category: "Fashion",
          amount: -20000
        },
        {
          id: 2,
          posted_at: "2017-02-29 10:30:00",
          description: "Paycheck from Bob's Burgers",
          category: "Income",
          amount: 100000
        },
        {
          id: 3,
          posted_at: "2017-05-24 10:53:00",
          description: "'Pair Programming Illuminated' by Laurie Williams and Robert Kessler",
          category: "Entertainment",
          amount: -1498
        },
        {
          id: 4,
          posted_at: "2017-05-24 08:52:00",
          description: "Medium Iced Cold Brew, Gregory's Coffee",
          category: "Food",
          amount: -365
        }
      ],
      activeCategory: "All"
    }
  }

  fetchTransactions() {
    const url = "https://boiling-brook-94902.herokuapp.com/transactions"
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          transactions: json
        })
      })
  }

  componentDidMount() {
    this.fetchTransactions()
  }

  handleChange(event) {
    this.setState({
      activeCategory: event.target.value
    })
  }

  render() {
    const displayedTransactions = this.state.transactions
    // state.activeCategory is logging correct category when clicked...
    // handleChangeshould is probably correct...
    console.log("state.activeCategory:", this.state.activeCategory)

    return (
      <div className="ui grid container">

        <CategorySelector
          transactions={ displayedTransactions }
          activeCategory={ this.state.activeCategory }
          handleChange={ this.handleChange.bind(this) }
        />

        <TransactionsList
          transactions={ displayedTransactions }
          activeCategory={this.state.activeCategory}
        />

      </div>
    )
  }
}

export default AccountContainer
