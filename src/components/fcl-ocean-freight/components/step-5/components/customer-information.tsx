import React from 'react';
import { Flex, ConfigProvider, Table } from 'antd';
import COLORS from '@/constants/color';
import { ColumnsType } from 'antd/lib/table';
import style from '../index.module.scss';

export default function CustomerInformation() {
  interface DataType {
    key: string;
    right: string;
    left: string;
    Customer?: string;
    Email?: string;
    Address?: string;
    Contact?: string;
    Mobile?: string;
    Tel?: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      dataIndex: 'right',
      key: 'right',
      width: '50%',
      render: (text, record) => {
        return (
          <Flex>
            <div
              style={{
                fontSize: '12px',
                fontWeight: '700',
                width: '100px',
              }}
            >
              {text}:
            </div>
            <div
              style={{
                fontSize: '12px',
                fontWeight: '400',
                width: '80%',
              }}
            >
              {record[text as keyof DataType]}
            </div>
          </Flex>
        );
      },
    },
    {
      dataIndex: 'left',
      key: 'left',
      width: '50%',
      render: (text, record) => {
        return (
          <Flex>
            <div
              style={{
                fontSize: '12px',
                fontWeight: '700',
                width: '100px',
              }}
            >
              {text}:
            </div>
            <div
              style={{
                fontSize: '12px',
                fontWeight: '400',
                width: '80%',
              }}
            >
              {record[text as keyof DataType]}
            </div>
          </Flex>
        );
      },
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      right: 'Customer',
      Customer: 'Nguyen Thanh Vien',
      left: 'Email',
      Email: 'thanhviennguyen01@gmail.com',
    },
    {
      key: '2',
      right: 'Address',
      Address: 'Nguyen Thanh Vien',
      left: 'Mobile',
      Mobile: 'Nguyen Thanh Vien',
    },
    {
      key: '3',
      right: 'Contact',
      Contact: 'Nguyen Thanh Vien',
      left: 'Tel',
      Tel: 'Nguyen Thanh Vien',
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            borderColor: 'rgba(0, 0, 0, 1)',
            borderRadius: 0,
            borderRadiusLG: 0,
          },
        },
      }}
    >
      <div
        className={style.cardCustomer}
        style={{
          marginBottom: '16px',
        }}
      >
        <div
          className={style.cardCustomerHeader}
          style={{
            paddingLeft: '16px',
            backgroundColor: COLORS.GREY_COLOR_HOVER,
            border: '1px solid #1D4486',
            width: '100%',
            color: COLORS.WHITE,
            fontSize: '18px',
            fontWeight: 600,
            height: '50px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Customer information
        </div>
        <Table
          style={{
            width: '100%',
          }}
          columns={columns}
          dataSource={data}
          showHeader={false}
          pagination={false}
          bordered
        />
      </div>
    </ConfigProvider>
  );
}
