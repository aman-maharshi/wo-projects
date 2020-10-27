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

        return (
            <Section>
                <p className="step-indicator">Step {values.step - 1} of 7</p>

                <FormWrapper>
                    <p className="form-title form-title--one">
                        {values.firstName ? values.firstName : "__"} and {values.partnerFirstName ? values.partnerFirstName : "__"}... has a nice ring to it!
                    </p>
                    <p className="form-title form-title--two">When&#39;s your big day?</p>
                    <div className="form-container">
                        <input type="date" onChange={handleUserInputChange("date")} defaultValue={values.date} />
                    </div>

                    <div className="button-container">
                        <button onClick={this.continue}>Next →</button>
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
