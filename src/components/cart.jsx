import React from "react";
import {Col, Divider, Row, Space, Typography, Button ,  } from 'antd'
import { useDispatch, useSelector } from "react-redux";
import { currency } from "../helper";

const {Title} = Typography

const Cart = () => {
    const { suncart , cart } = useSelector(store => store)
    const dipatch = useDispatch()
    return (
        <div className="cart">
            <Title level={3}>Giỏ hàng</Title>
            {cart?.map(item => (
                <Row key={item.id}>
                    <Col span={20}>
                        <Title level={5}>{item.name}</Title>
                        <img width="20%" src={item.image}/>
                    </Col>
                    <Col>
                      <Space>
                        <Button onClick={() => {
                          dipatch ({
                            type: 'cart/increase',
                            payload: item.id
                          })
                        }}>+</Button>

                        <p>{item.quantity}</p>

                        <Button onClick={() => {
                          dipatch ({
                            type: 'cart/decrease',
                            payload: item.id
                          })
                        }}>-</Button>
                      </Space>
                    </Col>
                    <Col span={4}>
                        {/* <Title level={5}>{currency(item.saleOffPrice)}</Title> */}
                        <p>{item.total}VND</p>
                    </Col>

                </Row>
            ))}
            <Divider/>
            <Row>
                <Col span={20}>Tổng số tiền</Col>

                <Col span={4}>{suncart}VND</Col>
            </Row>
        </div>
    )
}

export default Cart