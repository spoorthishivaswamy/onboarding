import { Head } from "./Head";
import { SubmitButton } from "./SubmitButton"
import { Form, Input, Select } from 'antd'

const { Option } = Select;

const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select style={{ width: 150 }}>
            <Option value="www.eden.com/">www.eden.com/</Option>
        </Select>
    </Form.Item>
);

export const SetupEden = props => (
    <div className="parent">
        <Head title="Eden" currentStep={2} heading="Welcome! First things first..." subHeading="You can always change them later." />
        <Form
            layout="vertical"
        > <Form.Item label="Full Name">
                <Input placeholder="Eden" />
            </Form.Item>
            <Form.Item label="Full Name" >
                <Input addonBefore={prefixSelector} />
            </Form.Item>
        </Form>
        <SubmitButton content="Create Workspace"></SubmitButton>
    </div>
)