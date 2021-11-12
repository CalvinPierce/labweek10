import React, { Component, useState } from 'react'
import './DataEntry.css';


export default class DataEntry extends Component {

    constructor(props) {
        super(props)

        //declare state object
        this.state = {
            email: 'Default email',
            name: 'Default full name',
            address1: 'Default address 1',
            address2: 'Default address 2',
            city: 'Default City',
            province: 'Default province',
            postalCode: 'Default postal code',
            showFields: false
        }
    }


    readName = e => {
        //Update the state object
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    readFormValues = e => {
        e.preventDefault()
        this.state.showFields = true;
    }

    render() {
        return (
            <div>
                <h1>Data Entry Form</h1>
                <form onSubmit={this.readFormValues}>
                    <div id="top">
                        <div>
                            <label class="form-label">Email</label>
                            <input name="email" id="email" class="form-control" placeholder="Enter email" type="email" onChange={this.readName} />
                        </div>
                        <div>
                            <label>Name</label>
                            <input name="name" id="name" placeholder="Full Name" type="text" onChange={this.readName} />
                        </div>
                    </div>


                    <label>Address</label>
                    <input name="address1" id="address1" placeholder="1234 Main St" type="text" onChange={this.readName} />
                    <label>Address 2</label>
                    <input name="address2" id="address2" placeholder="Apartment, studio, or floor" type="text" onChange={this.readName} />

                    <div id="btm">
                        <div>
                            <label>City</label>
                            <input name="city" id="city" placeholder="Enter City" type="text" onChange={this.readName} />
                        </div>
                        <div>
                            <label>Province</label>
                            <select name="province" id="province"  onChange={this.readName}>
                                <option value="Alberta">Alberta</option>
                                <option value="British Columbia">British Columbia</option>
                                <option value="Manitoba">Manitoba</option>
                                <option value="New Brunswick">New Brunswick</option>
                                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                                <option value="Nova Scotia">Nova Scotia</option>
                                <option value="Ontario">Ontario</option>
                                <option value="Prince Edward Island">Prince Edward Island</option>
                                <option value="Quebec">Quebec</option>
                                <option value="Saskatchewan">Saskatchewan</option>
                            </select>
                        </div>
                        <div>
                            <label>Postal Code</label>
                            <input name="postalCode" id="postal" placeholder="Enter Postal Code" type="text" onChange={this.readName} />
                        </div>
                    </div>
                    <input type="checkbox" />Agree Terms &amp; Condition?
                    <input type="submit" value="Submit" id="submit" />
                </form>

                <div>
                    <table id="output">
                        <tr>{this.state.showFields ? (<><td id="head">Email:</td> {this.state.email}</>) : ''}</tr>
                        <tr>{this.state.showFields ? (<><td id="head">Full name:</td> {this.state.name}</>) : ''}</tr>
                        <tr>{this.state.showFields ? (<><td id="head">Address:</td> {this.state.address1}</>) : ''}</tr>
                        <tr>{this.state.showFields ? (<><td id="head">Address 2:</td> {this.state.address2}</>) : ''}</tr>
                        <tr>{this.state.showFields ? (<><td id="head">City:</td> {this.state.city}</>) : ''}</tr>
                        <tr>{this.state.showFields ? (<><td id="head">Province:</td> {this.state.province}</>) : ''}</tr>
                        <tr>{this.state.showFields ? (<><td id="head">Postal Code:</td> {this.state.postalCode}</>) : ''}</tr>
                    </table>
                </div>
            </div>

        )
    }
}
