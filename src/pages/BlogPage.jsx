import React from 'react';
import IntroSection from '@components/IntroSection';
import BlogEntries from '@components/BlogEntries';

import '@styles/BlogPage.scss';

const blogDescription = `Unraveling the labyrinth of an Introverts mind`

const introExp1 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam optio molestias fugiat temporibus laborum, distinctio, est error, sit deserunt libero fugit porro cum reiciendis ducimus numquam accusamus. Dicta, quas similique.`

const introExp2 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam optio molestias fugiat temporibus laborum, distinctio, est error, sit deserunt libero fugit porro cum reiciendis ducimus numquam accusamus. Dicta, quas similique.`

const introExp3 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam optio molestias fugiat temporibus laborum, distinctio, est error, sit deserunt libero fugit porro cum reiciendis ducimus numquam accusamus. Dicta, quas similique.`

const introExp4 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam optio molestias fugiat temporibus laborum, distinctio, est error, sit deserunt libero fugit porro cum reiciendis ducimus numquam accusamus. Dicta, quas similique.`

const introExp5 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam optio molestias fugiat temporibus laborum, distinctio, est error, sit deserunt libero fugit porro cum reiciendis ducimus numquam accusamus. Dicta, quas similique.`

const BlogPage = () => {
    return (
        <div className='BlogPage'>
            <IntroSection/>
            <div className='title'>
                <h1>Hello Blog</h1>
                <p>{blogDescription}</p>
                <p>Or at least trying to</p>
            </div>
            <section className='content'>
                <div className='intro'>
                    <p className='p-intro'>
                        {introExp1}
                    </p>
                    <p className='p-intro'>
                        {introExp2}
                    </p>
                    <p className='p-intro'>
                        {introExp3}
                    </p>
                    <p className='p-intro'>
                        {introExp4}
                    </p>
                    <p className='p-intro'>
                        {introExp5}
                    </p>
                </div>
                <BlogEntries/>
            </section>
        </div>
    )   
}

export default BlogPage;