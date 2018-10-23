import React, { Component } from 'react';

let data = [
    { "date": "2015-05-09", "title": "Record 1", "amount": 100},
    { "date": "2015-05-10", "title": "Record 2", "amount": -500},
    { "date": "2015-05-11", "title": "Record 3", "amount": 200 }
];

class Ledger extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: data
        }
    }

    handleSubmit = (event) => {

        event.preventDefault();

        
        const target = event.target;
        const value = target.value;
        const name = target.name;
        data.push({
            [name]: value
        });

    }


    render() {
        return (
            <div class="ledger">
            <div class="row">
                        <div class="box safe">
                            <div class="label label--small">Debit</div>
                            <div class="label label--large">0</div>
                        </div>
                        <div class="box critical">
                            <div class="label label--small">Credit</div>
                            <div class="label label--large">0</div>
                        </div>
                        <div class="box neutral">
                            <div class="label label--small">Balance</div>
                            <div class="label label--large">0</div>
                        </div>
                    </div>

                    <div class="row bb">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" ref={(date) => this.date = date}></input>
                            <input type="text" ref={(title) => this.title = title}></input>
                            <input type="text" ref={(amount) => this.amount = amount}></input>
                            <input type="submit" onClick={this.handleSubmit}></input>
                        </form>
                    </div>
                    <div class="row">
                        <table>
                            <thead>
                                <tr>
                                    <td>Date</td>
                                    <td>Title</td>
                                    <td>Amount</td>
                                    <td>Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map( item => (
                                    <tr key={item.name}>
                                    <td>{item.date}</td>
                                    <td>{item.title}</td>
                                    <td>${item.amount}</td>
                                    <td>
                                        <button>Edit</button><button>Delete</button>
                                    </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            </div>
            
        );
    }
}
export default Ledger;

