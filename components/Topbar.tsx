"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/topbar.module.css";
import axios from "axios";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space, Select, GetProps } from "antd";

const Topbar: React.FC = () => {
  const [products, setProducts] = useState<object>([]); //state for api data storing
  const [loading, setLoading] = useState<boolean>(false); //for loading
  const [startIndex, setStartIndex] = useState<number>(1);
  const [endIndex, setEndIndex] = useState<number>(0);
  const [cronData, setCrondData] = useState<object>([]);
  const intervalRef = useRef<any>(null);

  const API: string = "https://foodhunt-z2x3.onrender.com/api"; //base api

  // get api data function
  const getData = async () => {
    try {
      const res = await axios.get(`${API}/products`);
      const { status, data } = await res;
      status == 200 ? setProducts(data?.getProducts) : setLoading(true);
    } catch (error) {
      console.error("Error while API call", error);
    }
  };

  // getapi function called in useEffect when component load
  useEffect(() => {
    getData();
  }, []);

  type SearchProps = GetProps<typeof Input.Search>;

  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <div className={`${styles.topbar_main}`}>
        <div className={`${styles.topbar}`}>
          <div className={`${styles.searchbar}`}>
            <Space direction="vertical">
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                className={`${styles.searchInput}`}
              />
            </Space>
          </div>
          <Select
            className={`${styles.sortfilter}`}
            defaultValue="Sort"
            onChange={handleChange}
            options={[
              { value: "left", label: "A-B" },
              { value: "right", label: "B-A" },
            ]}
          />
        </div>
      </div>
    </>
  );
};
export default Topbar;
