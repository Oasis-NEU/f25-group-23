"use client";
import { useEffect, useState } from 'react';
import Slider from './_components/Slider';
import GlobalApi from './_utils/GlobalApi';
import CategoryList from './_components/CategoryList';

export default function Home() {
  const [sliderList, setSliderList] = useState([]);

  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = () => {
    GlobalApi.getSliders().then(resp => {
      console.log('Slider Response:', resp.data);
      setSliderList(resp.data.data);
    }).catch(error => {
      console.error('Error fetching sliders:', error);
    });
  };
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then(resp => {
      setCategoryList(resp.data.data);
    });
  };
  
  return (
    <div className='p-5 md:p-10'>
      {/* Sliders */}
      <Slider sliderList={sliderList}/>
      {/*category list*/}
      <CategoryList categoryList={categoryList}/>
    </div>
  );
}