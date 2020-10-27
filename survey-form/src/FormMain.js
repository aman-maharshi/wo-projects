import React from "react"

import StepOne from "./components/StepOne"
import StepTwo from "./components/StepTwo"
import StepThree from "./components/StepThree"
import StepFour from "./components/StepFour"
import StepFive from "./components/StepFive"
import StepSix from "./components/StepSix"
import StepSeven from "./components/StepSeven"
import StepEight from "./components/StepEight"

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
            case 2:
                return <StepTwo values={values} nextStep={this.nextStep} />
            case 3:
                return <StepThree values={values} nextStep={this.nextStep} previousStep={this.previousTwoStep} handleUserInputChange={this.handleUserInputChange} />
            case 4:
                return <StepFour values={values} nextStep={this.nextStep} previousStep={this.previousStep} handleUserInputChange={this.handleUserInputChange} />
            case 5:
                return <StepFive values={values} nextStep={this.nextStep} previousStep={this.previousStep} handleUserInputChange={this.handleUserInputChange} />
            case 6:
                return <StepSix values={values} nextStep={this.nextStep} previousStep={this.previousStep} handleUserInputChange={this.handleUserInputChange} />
            case 7:
                return <StepSeven values={values} nextStep={this.nextStep} previousStep={this.previousStep} handleUserInputChange={this.handleUserInputChange} />
            case 8:
                return <StepEight values={values} previousStep={this.previousStep} handleVendors={this.handleVendors} />
        }
    }
}

export default FormMain
