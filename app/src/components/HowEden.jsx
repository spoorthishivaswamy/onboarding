import { Card, Avatar, Button } from 'antd';
import { Head } from "./Head"
import user from "../assets/user.png"
import group from "../assets/group.png"


const { Meta } = Card;

export const HowEden = props => {
    const handleClick = (event) => {
       props.parentCallback(4)

    }
    return(
    <div className="parent">
        <Head title="Eden" currentStep={3} heading="How are you planning to use Eden?" subHeading="We'll streamline your setup experience accordingly." />
        <div>
            <div className="how-eden-select">
                <Card style={{ width: 220, height: 230, border: '2px solid #B3AEE3', borderRadius: '5px' }} >
                    <Avatar size="small" src={user} />
                    <Meta title="For myself" description="Write better. Think more clearly. Stay organized." />
                </Card>
                <Card style={{ width: 220, height: 230 }} >
                    <Avatar size="small" src={group} />
                    <Meta title="With my team" description="Wikis, docs, tasks & projects, all in one place." />
                </Card>
            </div>
            <Button block onClick={handleClick}>Create Workspace</Button>
        </div>
    </div>)
}
