"use client";
import React, { useEffect, useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import Topbar from "./Topbar";
import styles from "../styles/sidebar.module.css";
import { useDispatch } from "react-redux";
import { openSidebar, closeSidebar } from "@/redux/indexReducer";

// sidebar menu items
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "1", icon: <PieChartOutlined />, label: "Dashboard", url: '/dashboard' },
  { key: "2", icon: <DesktopOutlined />, label: "Products" },
  { key: "3", icon: <ContainerOutlined />, label: "Option 3" },
  {
    key: "sub1",
    label: "Navigation One",
    icon: <MailOutlined />,
    children: [
      { key: "5", label: "Option 5" },
      { key: "6", label: "Option 6" },
      { key: "7", label: "Option 7" },
      { key: "8", label: "Option 8" },
    ],
  },
  {
    key: "sub2",
    label: "Navigation Two",
    icon: <AppstoreOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          { key: "11", label: "Option 11" },
          { key: "12", label: "Option 12" },
        ],
      },
    ],
  },
];

const Sidebar: React.FC = () => {
  // track sidebar open or close
  const [collapsed, setCollapsed] = useState(false);

  // dispacth redux store
  const dispatch = useDispatch();

  // call dispatch on collapsed state change
  useEffect(() => {
    collapsed ? dispatch(closeSidebar()) : dispatch(openSidebar());
  }, [collapsed]);

  // track sidebar toggle change
  const toggleCollapsed = () => {
    // toggle sidebar state
    setCollapsed(!collapsed);
  };
  return (
    <div className="sidebar_main" style={{ flex: "0 0 auto" }}>
      <div className="topbar_container">
        <Topbar />
      </div>
      <div
        className="sidebar_container"
        style={{ width: 256, height: "100vh", position: "fixed", top: "18px" }}
      >
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            margin: "0px 0px 13px 15px",
            backgroundColor: "#000",
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          inlineCollapsed={collapsed}
          items={items}
          className={`${styles.custom_menu}`}
          style={{ height: "100vh" }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
