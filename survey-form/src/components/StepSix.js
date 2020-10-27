import React from "react"
import { Section, FormWrapper } from "../SurveryFormStyles"

class StepSix extends React.Component {
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
                    <p className="form-title">Got it! Do you have a place and season in mind?</p>

                    <div className="form-container">
                        <select name="place" onChange={handleUserInputChange("place")} defaultValue={values.place}>
                            <option value="">Select Place</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Other">Other</option>
                        </select>
                        <select name="season" onChange={handleUserInputChange("season")} defaultValue={values.season}>
                            <option value="">Select Season</option>
                            <option value="Winter">Winter</option>
                            <option value="Summer">Summer</option>
                        </select>
                        <select name="year" onChange={handleUserInputChange("year")} defaultValue={values.year}>
                            <option value="">Select Year</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                        </select>
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

export default StepSix
