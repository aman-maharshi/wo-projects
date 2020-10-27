import styled from "styled-components"

const Section = styled.div`
    padding: 2em 0;
    max-width: 1230px;
    margin-left: auto;
    margin-right: auto;
    font-family: "Lato", sans-serif;

    .step-indicator {
        text-align: center;
        font-size: 1.5em;
        color: #ef6079;
    }
`

const FormWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 2em 0;
    border: 3px solid #cce8e5;

    .form-title {
        text-align: center;
        font-size: 1.8em;
        font-weight: bold;
        color: #003b58;

        @media (max-width: 576px) {
            font-size: 1.4em;
        }
    }
    .form-title--one {
        margin-bottom: 0;
    }
    .form-title--two {
        margin-top: 0;
    }

    .form-container {
        width: 60%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;

        @media (max-width: 576px) {
            width: 90%;
        }

        input,
        select {
            padding: 10px;
            outline: none;
            border: none;
            font-size: 18px;
            margin-bottom: 1.5em;
            color: gray;
            box-shadow: 2px 3px 3px #cce8e5;
        }
        input:focus,
        select:focus {
            box-shadow: 2px 3px 3px #70afa8;
        }
        input[type="checkbox"]:focus,
        input[type="radio"]:focus {
            box-shadow: none;
        }
    }
    .form-container--checkbox {
        display: flex;
        flex-direction: row;

        & > div {
            flex: 1;
        }

        @media (max-width: 576px) {
            font-size: 14px;
        }
    }

    .button-container {
        display: flex;
        justify-content: space-between;
        width: 60%;
        margin: 0 auto;

        @media (max-width: 576px) {
            width: 90%;
        }

        button {
            background: #003b58;
            border: 2px solid #003b58;
            padding: 10px 20px;
            color: white;
            font-weight: bold;
            font-size: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
            cursor: pointer;
        }
        button:disabled {
            background: lightgray;
            border-color: lightgray;
        }
        button.back {
            background: #5f5f5f;
            border: 2px solid #5f5f5f;
        }
    }

    .radio-row,
    .checkbox-row {
        font-size: 1.1em;

        input {
            box-shadow: none;
            transform: scale(1.5);
        }
        label {
            padding-left: 10px;
        }
    }
    .radio-row--second {
        margin-bottom: 1em;
    }
`

export { Section, FormWrapper }
