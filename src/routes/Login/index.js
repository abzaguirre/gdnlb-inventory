import {
    Row, Col, Card,
    Form, Input, Button
} from 'antd';

import logo from '../../components/assets/images/Logo.png'

const FormItem = Form.Item


const Login = () => {
    return (
        <Row
            className="gd-container login"
            type="flex"
            justify="center"
            align="middle"
        >
            <Col md={8}>
                <Card bordered={false}>
                    <Row
                        type="flex"
                        justify="center"
                        align="middle"
                    >
                        <Col md={24} className="login-card-title">
                            <img src={logo} alt="" />
                        </Col>
                    </Row>
                    <hr/>
                    <Form className="login-form">
                        <FormItem
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </FormItem>

                        <FormItem
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </FormItem>

                        <Row type="flex" justify="center" style={{ margin: "10px 0 0" }}>
                            <FormItem>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </FormItem>
                        </Row>

                    </Form>
                </Card>
            </Col>
        </Row>
    )
}
export default Login