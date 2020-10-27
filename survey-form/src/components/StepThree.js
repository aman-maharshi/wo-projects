import React from "react"
import { Section, FormWrapper } from "../SurveryFormStyles"

class StepThree extends React.Component {
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
        if (values.partnerFirstName !== "" && values.partnerLastName !== "" && values.partnerRole !== "") {
            nextDisabled = false
        }

        return (
            <Section>
                <p className="step-indicator">Step {values.step - 1} of 7</p>

                <FormWrapper>
                    <p className="form-title">Who&#39;s your lucky spouse-to-be?</p>

                    <div className="form-container">
                        <input type="text" placeholder="Partner's First Name" onChange={handleUserInputChange("partnerFirstName")} defaultValue={values.partnerFirstName} />
                        <input type="text" placeholder="Partner's Last Name" onChange={handleUserInputChange("partnerLastName")} defaultValue={values.partnerLastName} />
                        <select name="role" onChange={handleUserInputChange("partnerRole")} defaultValue={values.partnerRole}>
                            <option value="">Select Role</option>
                            <option value="Bride">Bride</option>
                            <option value="Groom">Groom</option>
                            <option value="Other">Other</option>
                        </select>
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

export default StepThree
