import React from "react"
import { Section, FormWrapper } from "../SurveryFormStyles"

class StepEight extends React.Component {
    back = e => {
        e.preventDefault()
        this.props.previousStep()
    }

    render() {
        const values = this.props.values
        const handleVendors = this.props.handleVendors

        return (
            <Section>
                <p className="step-indicator">Step {values.step - 1} of 7</p>

                <FormWrapper>
                    <p className="form-title">Last thing: What do you think you&#39;ll want for your wedding?</p>

                    <div className="form-container form-container--checkbox">
                        <div>
                            <div className="checkbox-row">
                                <input type="checkbox" id="photographers" name="vendor" onChange={handleVendors("photographers")} checked={values.vendors.photographers} />
                                <label htmlFor="photographers">Photographers</label>
                            </div>
                            <div className="checkbox-row">
                                <input type="checkbox" id="caterers" name="vendor" onChange={handleVendors("caterers")} checked={values.vendors.caterers} />
                                <label htmlFor="caterers">Caterers</label>
                            </div>
                            <div className="checkbox-row">
                                <input type="checkbox" id="decorators" name="vendor" onChange={handleVendors("decorators")} checked={values.vendors.decorators} />
                                <label htmlFor="decorators">Decorators</label>
                            </div>
                            <div className="checkbox-row">
                                <input type="checkbox" id="weddingPlanners" name="vendor" onChange={handleVendors("weddingPlanners")} checked={values.vendors.weddingPlanners} />
                                <label htmlFor="weddingPlanners">Wedding Planners</label>
                            </div>
                            <div className="checkbox-row">
                                <input type="checkbox" id="makeupArtists" name="vendor" onChange={handleVendors("makeupArtists")} checked={values.vendors.makeupArtists} />
                                <label htmlFor="makeupArtists">Makeup Artists</label>
                            </div>
                            <div className="checkbox-row">
                                <input type="checkbox" id="choreographers" name="vendor" onChange={handleVendors("choreographers")} checked={values.vendors.choreographers} />
                                <label htmlFor="choreographers">Choreographers</label>
                            </div>
                        </div>
                        <div>
                            <div className="checkbox-row">
                                <input type="checkbox" id="entertainers" name="vendor" onChange={handleVendors("entertainers")} checked={values.vendors.entertainers} />
                                <label htmlFor="entertainers">Entertainers</label>
                            </div>
                            <div className="checkbox-row">
                                <input type="checkbox" id="bridalOutfits" name="vendor" onChange={handleVendors("bridalOutfits")} checked={values.vendors.bridalOutfits} />
                                <label htmlFor="bridalOutfits">Bridal Outfits</label>
                            </div>
                            <div className="checkbox-row">
                                <input type="checkbox" id="invitationCards" name="vendor" onChange={handleVendors("invitationCards")} checked={values.vendors.invitationCards} />
                                <label htmlFor="invitationCards">Invitation Cards</label>
                            </div>
                            <div className="checkbox-row">
                                <input type="checkbox" id="transports" name="vendor" onChange={handleVendors("transports")} checked={values.vendors.transports} />
                                <label htmlFor="transports">Transports</label>
                            </div>
                            <div className="checkbox-row">
                                <input type="checkbox" id="pandits" name="vendor" onChange={handleVendors("pandits")} checked={values.vendors.pandits} />
                                <label htmlFor="pandits">Pandits</label>
                            </div>
                            <div className="checkbox-row">
                                <input type="checkbox" id="djs" name="vendor" onChange={handleVendors("djs")} checked={values.vendors.djs} />
                                <label htmlFor="djs">DJs</label>
                            </div>
                        </div>
                    </div>

                    <div className="button-container">
                        <button>Submit →</button>
                        <button className="back" onClick={this.back}>
                            ← Back
                        </button>
                    </div>
                </FormWrapper>
            </Section>
        )
    }
}

export default StepEight
