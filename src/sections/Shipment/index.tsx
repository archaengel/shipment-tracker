import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { postShipmentName } from '../../lib/hooks';
import { useParams } from 'react-router';
import { useShipment } from '../../lib/hooks';
import { Button, Form, Tooltip, Typography, Input as AntdInput } from 'antd';
import { CargoTable, ServiceTable } from './components';
import {
  Content as BaseContent,
  Text,
  Meta,
  PageSkeleton,
  ErrorBanner,
} from '../../lib/components';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;

interface MatchParams {
  id: string;
}

const Input = styled(AntdInput)`
  font-size: 20px;
`;

const Content = styled(BaseContent)`
  background: white;
`;

const ShipmentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleInputWrapper = styled.div`
  line-height: 40px;
  width: 100%;
`;

export const Shipment = () => {
  const [form] = Form.useForm();
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const { id } = useParams<MatchParams>();
  const { status, data, refetch } = useShipment({ id });
  const [mutate] = useMutation(postShipmentName, {
    onSuccess: () => {
      setIsEditingTitle(false);
      refetch();
    },
  });

  const handleUpdateName = async () => {
    const { name } = await form.validateFields();
    mutate({
      name,
      id,
    });
  };

  const titleInputForm = (
    <TitleInputWrapper>
      <Form
        form={form}
        initialValues={{ name: data?.shipment.name }}
        layout="horizontal"
        onFinish={handleUpdateName}
      >
        <Form.Item
          name="name"
          rules={[
            { required: true, message: "Shipments can't have an empty name" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button.Group size="small">
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button onClick={() => setIsEditingTitle(false)}>Cancel</Button>
          </Button.Group>
        </Form.Item>
      </Form>
    </TitleInputWrapper>
  );

  const titleElement = isEditingTitle ? (
    titleInputForm
  ) : (
    <Tooltip title="click to edit" placement="left">
      <div onClick={() => setIsEditingTitle(true)}>
        <Title level={1}>{data?.shipment.name}</Title>
      </div>
    </Tooltip>
  );

  if (status === 'error') {
    return (
      <Content>
        <ErrorBanner />
      </Content>
    );
  }

  if (status === 'loading') {
    return (
      <Content>
        <PageSkeleton />
      </Content>
    );
  }

  const shipmentElement =
    data && data.shipment ? (
      <>
        <ShipmentHeader>
          {titleElement}
          <Meta
            id={id}
            userId={data.shipment.userId}
            type={data.shipment.type}
            mode={data.shipment.mode}
            status={data.shipment.status}
          />
        </ShipmentHeader>
        <Paragraph>
          <Title level={2} ellipsis>
            <Text strong>From: </Text>
            {data.shipment.origin}
          </Title>
          <Title level={2} ellipsis>
            <Text strong>To: </Text>
            {data.shipment.destination}
          </Title>
        </Paragraph>
        <Paragraph>
          <Title level={2}>
            <Text strong>[Total]:</Text> {data.shipment.total}
          </Title>
        </Paragraph>
        <CargoTable dataSource={data.shipment.cargo} />
        <ServiceTable dataSource={data.shipment.services} />
      </>
    ) : null;

  return <Content>{shipmentElement}</Content>;
};
