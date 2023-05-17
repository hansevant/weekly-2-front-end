import React from 'react'
import Navbar from '../Components/Navbar'
import PrimaryButton from '../Components/PrimaryButton'
import { Link } from 'react-router-dom'
import MyBlogCard from '../Components/MyBlogCard'

const MyBlog = () => {
  return (
    <div>
    <Navbar/>

    <div className='max-w-2xl mt-16 mx-auto'>
        <div className='flex items-center justify-between'>
                <p className='text-5xl font-bold tracking-tight mb-6'>Blog Saya</p>
                <Link to='/addblog'>
                    <PrimaryButton className='p-2'>Tambah Blog +</PrimaryButton>
                </Link>
        </div>
        <hr/>

        <MyBlogCard/>
        <MyBlogCard/>
        <MyBlogCard/>

    </div>

</div>
  )
}

export default MyBlog