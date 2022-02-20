import { Head } from "./Head";
import { Form, Input,Button } from 'antd'


export const WelcomeEden = props => {
   const handleClick = (event) => {
        console.log(props.parentCallback(2))

    }
    return (<div className="parent">
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
            <Button block onClick={handleClick}>Create Workspace</Button>
    </div>)
}