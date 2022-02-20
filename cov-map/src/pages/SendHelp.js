import React, { useState, useEffect } from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { IoFastFoodOutline } from 'react-icons/io5';
import {MdOutlineHealthAndSafety} from 'react-icons/md';
import {FaToolbox} from 'react-icons/fa';
import {InboxOutlined } from '@ant-design/icons';
import {Input, Upload, message } from 'antd';

const { TextArea } = Input;
const { Dragger } = Upload;
export default function SendHelp(){
    const [value, setValue] = useState('');
    const onChange = e => {
 
      };
    const props = {
    name: 'file',
    multiple: true,
    action: '',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
        console.log(info.file, info.fileList);
        }
        if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
    };
    return (
        <div>
            <div className="pb-7">
            <Header/>  
            </div>
            <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-7 mt-5">
            <form action="#" method="POST">
                <h1 className="w-full my-2 text-2xl font-bold text-orange-500 leading-tight text-gray-800">
                What do you want us to help?
                </h1>

                <div className="bg-transparent text-orange-500 font-mono flex flex-col">
                    <div className="flex flex-row-reverse flex-wrap m-auto">
                        <button className="m-4 hover:bg-orange-600 rounded px-3 py-2 m-1 border-2 shadow-lg bg-white border-orange-600 hover:text-white">
                        <IoFastFoodOutline className="text-4xl "/>
                        Food
                        </button>
                    <button className="m-4 hover:bg-orange-600 rounded px-3 py-2 m-1 border-2 shadow-lg bg-white border-orange-600 hover:text-white">
                        <MdOutlineHealthAndSafety className="text-4xl text-center"/>
                        Healthcare
                    </button>
                    <button className="m-4 hover:bg-orange-600 rounded px-3 py-2 m-1 border-2 shadow-lg bg-white border-orange-600  hover:text-white">
                        <FaToolbox className="text-4xl"/>
                        Daily necessities
                    </button>
                    </div>
                </div>
                <h1 className="w-full my-2 text-2xl font-bold text-orange-500 leading-tight text-gray-800">
                Your information
                </h1>
                <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label for="first-name" className="block text-sm font-medium text-gray-700">Fullname</label>
                        <Input className="border-2 border-gray rounded mt-2 py-1 w-full" name="fullname"/>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label for="last-name" className="block text-sm font-medium text-gray-700">Phone number</label>
                        <Input className="border-2 border-gray rounded mt-2 py-1 w-full" name="phone"/>
                    </div>

                    

                    <div className="col-span-6 sm:col-span-3">
                        <label for="city" className="block text-sm font-medium text-gray-700">City</label>
                        <select name="city" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>TP. Hồ Chí Minh</option>
                        <option>Hà Nội</option>
                        <option>Hải Phòng</option>
                        </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label for="district" className="block text-sm font-medium text-gray-700">District</label>
                        <select name="district" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Quận 1</option>
                        <option>Quận 2</option>
                        <option>Quận 3</option>
                        </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label for="ward" className="block text-sm font-medium text-gray-700">Ward</label>
                        <select name="ward" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Phường 1</option>
                        <option>Phường 2</option>
                        <option>Phường 3</option>
                        </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label for="email-address" className="block text-sm font-medium text-gray-700 ">Street address</label>
                        <Input className="border-2 border-gray rounded mt-2 py-1 w-full" name="email"/>
                        
                    </div>
                    
                    <div className="col-span-6 sm:col-span-7 lg:col-span-7">
                        <label for="Detail" className="block text-sm font-medium text-gray-700 ">Detail</label>
                        <TextArea className="border-2 border-gray rounded mt-2 w-full" autoSize={{ minRows: 3, maxRows: 10 }} />
                    </div>

                    <div className="col-span-6 sm:col-span-7 lg:col-span-7">
                    <label for="Upload" className="block text-sm font-medium text-gray-700">Photo</label>
                    <Dragger {...props} className="border-dashed border-2 border-gray text-center">
                        <p className="ant-upload-drag-icon text-orange-500 text-4xl">
                        <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    </Dragger>
                    </div>
                    </div>
                </div>

                

                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send help</button>
                </div>
                </div>
            </form>
            </section>
            <Footer/> 
        </div>
    );
}