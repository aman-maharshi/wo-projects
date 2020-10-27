import React from "react"
import StepOne from "./components/StepOne"

class FormMain extends React.Component {
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        role: "",
        partnerFirstName: "",
        partnerLastName: "",
        partnerRole: "",
        date: "",
        venueBooked: "",
        place: "",
        season: "",
        year: "",
        guestCount: "",
        budget: "",
        vendors: {}
    }

    nextStep = () => {
        this.setState({
            step: this.state.step + 1
        })
    }

    previousStep = () => {
        this.setState({
            step: this.state.step - 1
        })
    }

    previousTwoStep = () => {
        this.setState({
            step: this.state.step - 2
        })
    }

    handleUserInputChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    // making the selected vendor true / false based on the checkbox input
    handleVendors = input => e => {
        if (e.target.checked) {
            this.setState({
                vendors: {
                    ...this.state.vendors,
                    [input]: true
                }
            })
        } else {
            this.setState({
                vendors: {
                    ...this.state.vendors,
                    [input]: false
                }
            })
        }
    }

    render() {
        const { step, firstName, lastName, role, partnerFirstName, partnerLastName, partnerRole, date, venueBooked, place, season, year, guestCount, budget, vendors } = this.state
        const values = { step, firstName, lastName, role, partnerFirstName, partnerLastName, partnerRole, date, venueBooked, place, season, year, guestCount, budget, vendors }
        switch (step) {
            case 1:
                return <StepOne values={values} nextStep={this.nextStep} handleUserInputChange={this.handleUserInputChange} />
        }
    }
}

export default FormMain
