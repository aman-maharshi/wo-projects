import React from "react"
import { Section, FormWrapper } from "../SurveryFormStyles"

class StepTwo extends React.Component {
    render() {
        const values = this.props.values
        const nextStep = this.props.nextStep

        setTimeout(() => {
            nextStep()
        }, 1500)

        return (
            <Section>
                <p className="step-indicator">...</p>

                <FormWrapper>
                    <p className="form-title">Nice to meet you, {values.firstName}</p>
                </FormWrapper>
            </Section>
        )
    }
}

export default StepTwo
