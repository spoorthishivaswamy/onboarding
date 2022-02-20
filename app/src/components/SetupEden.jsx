import { Head } from "./Head";
import { Form, Input, Select, Button } from 'antd'

const { Option } = Select;

const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select style={{ width: 150 }}>
            <Option value="www.eden.com/">www.eden.com/</Option>
        </Select>
    </Form.Item>
);

export const SetupEden = props => {
    const handleClick = (event) => {
        props.parentCallback(3)
    }
    return (
        <div className="parent">
            <Head title="Eden" currentStep={2} heading="Let's set up a home for all your work" subHeading="You can always create another workspace later." />
            <Form
                layout="vertical"
            > <Form.Item label="Full Name">
                    <Input placeholder="Eden" />
                </Form.Item>
                <Form.Item label="Full Name" >
                    <Input addonBefore={prefixSelector} />
                </Form.Item>
            </Form>
            <Button block onClick={handleClick}>Create Workspace</Button>
        </div>
    )
}