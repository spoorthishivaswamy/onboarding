import { Head } from "./Head";
import {Button} from "antd"

export const CongratsEden = props => (
    <div className="parent">
            <Head title="Eden"  currentStep={4} heading="Congratulations, Eren!" subHeading="You have completed your onboarding, you can start using the Eden!"/>
            <Button block>Launch Eden</Button>
    </div>


)