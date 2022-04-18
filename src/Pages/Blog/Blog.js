import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-3'>
            <div>
                <h3>১। Difference between authorization and authentication?</h3>
                <h5>অথরাইজেশনঃ</h5>
                <p>অথরাইজেশন প্রক্রিয়া চলাকালীন, ব্যবহারকারী বা ব্যক্তিদের যাচাই করা হয়। যদিও এই প্রক্রিয়াটি অথেন্টিকেশন প্রক্রিয়ার পরে করা হয়। অথরাইজেশন ব্যবহারকারীর কাছে পরিবর্তনযোগ্য নয়।</p>
                <h5>অথেন্টিকেশনঃ</h5>
                <p>অথেন্টিকেশন প্রক্রিয়ায়, সিস্টেমে অ্যাক্সেস প্রদানের জন্য ব্যবহারকারীদের পরিচয় পরীক্ষা করা হয়। অথেন্টিকেশন প্রক্রিয়ায়, ব্যবহারকারী বা ব্যক্তিদের যাচাই করা হয়। এটি অথরাইজেশন প্রক্রিয়ার আগে করা হয়।

                </p>
            </div>
            <div>
                <h3>২। Why are you using firebase?</h3>
                <p>যে কারনে ব্যবহার করবোঃ ব্যাকএন্ড সার্ভার ছাড়াই অ্যাপ্লিকেশন তৈরি করা যায়। ফায়ারবেস ডাটাবেসের সমস্ত ডেটা রিয়েল-টাইম পরিচালনা করে। ডাটাবেস থেকে ডেটা আদান-প্রদান সহজ এবং দ্রুত। ইউজার এর সিকিউরিটি এর জন্য ব্যবহার করা হয়। ব্যাকএন্ড সার্ভারের জন্য অতিরিক্ত অর্থ ব্যয় করার দরকার নেই।</p>
                <h3>What other options do you have to implement authentication?</h3>
                <p>Cloud messaging, Realtime database</p>
            </div>
            <div>
                <h3>
                    ৩। What other services does firebase provide other than authentication?
                </h3>
                <p>
                    Parse, Back4App, Kuzzle, Hoodie, Nhost, Heroku, Pubnub, Deployd
                </p>
            </div>
        </div>
    );
};

export default Blog;