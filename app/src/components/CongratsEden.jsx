import { Head } from "./Head";
import {SubmitButton} from "./SubmitButton"

export const CongratsEden = props => (
    <div className="parent">
            <Head title="Eden"  currentStep={4} heading="Congratulations, Eren!" subHeading="You have completed your onboarding, you can start using the Eden!"/>
            <SubmitButton content="Launch Eden"></SubmitButton>
    </div>


)