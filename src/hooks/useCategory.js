import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../config/config";

export default function useCategory() {
  const [categories, setCategories] = useState([]);


  const getCategories = async () => {
    try {
      const { data } = await axios.get(`${api}/api/v1/category/get-category`);
      setCategories(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}
