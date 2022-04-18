import React from 'react';
import profile from '../../images/about/IMG_0078.JPG'
const About = () => {
    return (
        <div className='container '>
            <div className='d-flex justify-content-center align-items-center'>
                <img style={{ width: '250px' }} title="Md Tareq Hossain" src={profile} alt="" />
            </div>
            <h2 className='text-primary text-center mt-2'>Md Tareq Hossain</h2>

            <div className='my-5'>
                <p>আমার লক্ষ্যঃ আমার লক্ষ্য হিসাবে, আমি সঠিক শিক্ষা প্রদান করতে চাই। প্রত্যেক ব্যক্তির জীবনে একটি সুনির্দিষ্ট উদ্দেশ্য থাকতে হবে তেমনি আমার ও আছে। আমার ক্যারিয়ার ওয়েব ডেবলপমেন্ট এর দিকে স্থির করেছি। আমার স্বপ্ন সফটওয়্যার ইঞ্জিনিয়ার হওয়ার, এটা সহজ নয়। কিন্তু আমি বিশ্বাস করি এটা পারব। আমি যখন ইঞ্জিনিয়ার হব তখন গরীবদের সাহায্য করব।</p>
            </div>
        </div>
    );
};

export default About;