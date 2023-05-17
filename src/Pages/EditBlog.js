import React from 'react'
import PrimaryButton from '../Components/PrimaryButton'
import TextInput from '../Components/TextInput'
import Navbar from '../Components/Navbar'
import AuthLayout from '../Layouts/AuthLayout'

const EditBlog = () => {
  return (
    <>
    <Navbar/>
    <AuthLayout>
        <h1 className="font-medium text-2xl">Edit Blog</h1>

        <form className="mt-8">
            <div className="space-y-5">
                <div>
                    <label htmlFor="judul">Judul</label>
                    <TextInput value='Judul Lama' type="text" id="judul" placeholder="Judul Blog" className="block w-full" />
                </div>

                <div>
                    <label htmlFor="konten">Konten Blog</label>
                    <textarea value='konten lama' className='border p-2.5 rounded-lg block w-full'></textarea>
                </div>

                <PrimaryButton className="w-full">Submit</PrimaryButton>
            </div>
        </form>

    </AuthLayout>
    </>
  )
}

export default EditBlog