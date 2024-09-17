"use client";
import React, { useEffect, useState } from "react";
import {
  DesktopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import Topbar from "./Topbar";
import styles from "../styles/sidebar.module.css";
import { useDispatch } from "react-redux";
import { openSidebar, closeSidebar } from "@/redux/indexReducer";
import { useRouter } from "next/navigation";

// sidebar menu items
const items = [
  { key: "1", icon: <PieChartOutlined />, label: "dashboard", route: "/" },
  {
    key: "2",
    icon: <DesktopOutlined />,
    label: "Products",
    route: "/products",
  },
  // {
  //   key: "sub1",
  //   label: "Navigation One",
  //   icon: <MailOutlined />,
  //   children: [
  //     { key: "5", label: "Option 5", route: "/option5" },
  //     { key: "6", label: "Option 6", route: "/option6" },
  //     { key: "7", label: "Option 7", route: "/option7" },
  //     { key: "8", label: "Option 8", route: "/option8" },
  //   ],
  // }
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

  // sidebar menu items navigation
  const router = useRouter();

  // Helper function to recursively find the item by key
  const findItemByKey: any = (items: any, key: number) => {
    for (const item of items) {
      if (item.key === key) {
        return item;
      }
      if (item.children) {
        const found = findItemByKey(item.children, key);
        if (found) {
          return found;
        }
      }
    }
    return null;
  };
  const handleNavigate = (item: any) => {
    // Find the clicked item in the items array
    const selectedItem = findItemByKey(items, item.key);
    console.log("selectedItem", selectedItem);
    // Navigate to the corresponding route
    if (selectedItem && selectedItem.route) {
      router.push(selectedItem.route);
    }
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
          onClick={handleNavigate}
        />
      </div>
    </div>
  );
};

export default Sidebar;
