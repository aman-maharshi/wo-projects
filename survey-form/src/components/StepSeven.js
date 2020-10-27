import React from "react"
import { Section, FormWrapper } from "../SurveryFormStyles"

class StepSeven extends React.Component {
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
                    <p className="form-title">That&#39;s great! What’s your estimated guest count and total budget?</p>

                    <div className="form-container">
                        <input type="number" placeholder="Guest Count" onChange={handleUserInputChange("guestCount")} defaultValue={values.guestCount} />
                        <input type="number" placeholder="Total Budget (₹)" onChange={handleUserInputChange("budget")} defaultValue={values.budget} />
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

export default StepSeven
