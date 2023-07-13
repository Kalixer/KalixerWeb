import React from 'react';
import Entry from '@components/Entry.jsx'

import '@styles/BlogEntries.scss';


const BlogEntries = () => {
	return (
		<div className='BlogEntries'>
            <h1>Entries</h1>
            <div className='entries'>
                <div className='entry-by-three'>
                    <Entry/>
                    <Entry/>
                    <Entry/>
                </div>
                <div className='entry-by-three'>
                    <Entry/>
                    <Entry/>
                    <Entry/>
                </div>
            </div>
        </div>
	)
}

export default BlogEntries
