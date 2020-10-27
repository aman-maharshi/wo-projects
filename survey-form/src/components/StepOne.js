import React from "react"
import { Section, FormWrapper } from "../SurveryFormStyles"

class StepOne extends React.Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const values = this.props.values
        const handleUserInputChange = this.props.handleUserInputChange

        let nextDisabled = true
        if (values.firstName !== "" && values.lastName !== "" && values.role !== "") {
            nextDisabled = false
        }

        return (
            <Section>
                <p className="step-indicator">Step {values.step} of 7</p>

                <FormWrapper>
                    <p className="form-title">Let us get to know you so we can customize your planning experience</p>
                    <div className="form-container">
                        <input type="text" placeholder="First Name" onChange={handleUserInputChange("firstName")} defaultValue={values.firstName} />
                        <input type="text" placeholder="Last Name" onChange={handleUserInputChange("lastName")} defaultValue={values.lastName} />
                        <select name="role" onChange={handleUserInputChange("role")} defaultValue={values.role}>
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
                    </div>
                </FormWrapper>
            </Section>
        )
    }
}

export default StepOne
