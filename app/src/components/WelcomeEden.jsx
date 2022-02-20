import { Head } from "./Head";
import { SubmitButton } from "./SubmitButton"
import { Form, Input } from 'antd'


export const WelcomeEden = props => (
    <div className="parent">
        <Head title="Eden" currentStep={1} heading="Welcome! First things first..." subHeading="You can always change them later." />
        <Form
            layout="vertical"
        > <Form.Item label="Full Name">
                <Input placeholder="Eden" />
            </Form.Item>
            <Form.Item
                label="Display Name"
            >
                <Input placeholder="Steve" />
            </Form.Item></Form>
        <SubmitButton  content="Create Workspace"/>
    </div>
)