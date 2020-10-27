import React from "react"
import { Section, FormWrapper } from "../SurveryFormStyles"

class StepFour extends React.Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault()
        this.props.previousStep()
    }

    render() {
        const values = this.props.values
        const handleUserInputChange = this.props.handleUserInputChange

        let nextDisabled = true
        if (values.venueBooked) {
            nextDisabled = false
        }

        return (
            <Section>
                <p className="step-indicator">Step {values.step - 1} of 7</p>

                <FormWrapper>
                    <p className="form-title">Congrats! Do you know your venue yet?</p>
                    <div className="form-container">
                        <div className="radio-row">
                            <input type="radio" id="booked" name="venue" value="booked" onChange={handleUserInputChange("venueBooked")} checked={values.venueBooked === "booked" ? true : false} />
                            <label htmlFor="booked">Yeah, We’ve booked our venue</label>
                        </div>
                        <div className="radio-row radio-row--second">
                            <input type="radio" id="notbooked" name="venue" value="notbooked" onChange={handleUserInputChange("venueBooked")} checked={values.venueBooked === "notbooked" ? true : false} />
                            <label htmlFor="notbooked">Nope, we’re exploring our options</label>
                        </div>
                    </div>

                    <div className="button-container">
                        <button onClick={this.continue} disabled={nextDisabled}>
                            Next →
                        </button>
                        <button className="back" onClick={this.back}>
                            ← Back
                        </button>
                    </div>
                </FormWrapper>
            </Section>
        )
    }
}

export default StepFour
