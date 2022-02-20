import React from "react";
import { Steps, Typography, Image } from 'antd';
import success from "../assets/success.png"
import logo from "../assets/logo.png"

const { Step } = Steps;
const { Title, Text } = Typography;

const getClassName = currentStep => (
    (currentStep === 4 ? "congrats-eden" : "how-eden-use")
)

export const Head = props => (
    <>
        <div style={{ display: "flex", justifyContent: "center" }}><img width={34} height={34} src={logo} alt=""/> <Title className="how-eden-title" level={3}>{props.title}</Title></div>
        <Steps current={props.currentStep}>
            <Step icon={1} />
            <Step icon={2} />
            <Step icon={3} />
            <Step icon={4} />
        </Steps>
        {props.currentStep === 4 ? <Image width={100} src={success} /> : <></>}
        <Title level={2} className={getClassName(props.currentStep)}>{props.heading}</Title>
        <Text className="how-eden-streamline">{props.subHeading}</Text></>
)
